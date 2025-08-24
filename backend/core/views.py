from rest_framework import generics
from .models import Experience, Skills, Project
from .serializers import ExperienceSerializer, SkillSerializer, ProjectSerializer


#EXPERIENCES
class ExperienceListCreate(generics.ListCreateAPIView):
    queryset = Experience.objects.all().order_by("start_date")
    serializer_class = ExperienceSerializer


class ExperienceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


#SKILLS
class SkillListCreate(generics.ListCreateAPIView):
    queryset = Skills.objects.all().order_by("id")
    serializer_class = SkillSerializer


class SkillDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skills.objects.all()
    serializer_class = SkillSerializer


#PROJECTS
class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
