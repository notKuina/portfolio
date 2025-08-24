from rest_framework import serializers
from.models import Experience,ExperiencePoint,Skills,Project

class ExperiencePointSerializer(serializers.ModelSerializer):
    class Meta:
        model=ExperiencePoint
        fields=["id","text"]

class ExperienceSerializer(serializers.ModelSerializer):
    points=ExperiencePointSerializer(many=True)

    class Meta:
        model=Experience
        fields=["id","role","company","description","start_date","end_date","points"]


    def create(self,validated_data):
        points_data=validated_data.pop('points',[])
        experience=Experience.objects.create(**validated_data)
        for point in points_data:
            ExperiencePoint.objects.create(experience=experience, **point)
        return experience
    

    def update(self,instance,validated_data):
        points_data=validated_data.pop('points',[])
        instance.role=validated_data.get('title',instance.role)
        instance.company=validated_data.get('company',instance.company)
        instance.description=validated_data.get('description',instance.description)
        instance.start_date=validated_data.get('start_date',instance.start_date)
        instance.end_date=validated_data.get('end_date',instance.end_date)
        instance.save()


        instance.points.all().delete()
        for point in points_data:
            ExperiencePoint.objects.create(experience=instance, **point)
        return instance
    
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model=Skills
        fields=["id","name","icon"]

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields="__all__"