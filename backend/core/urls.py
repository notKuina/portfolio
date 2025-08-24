from django.urls import path
from .import views

urlpatterns=[
    path("experiences/",views.ExperienceListCreate.as_view(),name="experiences"),
    path("experience/<int:pk>/",views.ExperienceDetail.as_view(),name="experience"),

    path("skills/",views.SkillListCreate.as_view(),name="skills"),
    path("skill/<int:pk>/",views.SkillDetail.as_view(),name="skill"),

    path("projects/",views.ProjectListCreate.as_view(),name="projects"),
    path("projects/<int:pk>/",views.ProjectDetail.as_view(),name="project"),
]