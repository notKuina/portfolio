from django.db import models

class Experience(models.Model):
    role=models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    description= models.TextField()
    start_date=models.DateField()
    end_date=models.DateField(null=True,blank=True)


    def __str__(self):
        return f"{self.role} at {self.company}"

class ExperiencePoint(models.Model):
    experience = models.ForeignKey(Experience,related_name="points",on_delete=models.CASCADE)
    text=models.CharField(max_length=500)

    def __str__(self):
        return self.text[:50]
    
class Skills(models.Model):
    icon=models.CharField(max_length=100,blank=True)
    name=models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Project(models.Model):
    name=models.CharField(max_length=200)
    year=models.CharField(max_length=50)
    align=models.CharField(max_length=10,blank=True)
    image=models.ImageField(upload_to="projects/",blank=True,null=True)
    link=models.URLField(max_length=500,blank=True)
    description=models.TextField()

    def __str__(self):
        return self.name