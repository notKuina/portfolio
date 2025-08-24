from django.contrib import admin
from.models import Experience,ExperiencePoint,Skills,Project

class ExperiencePointInline(admin.TabularInline):
    model=ExperiencePoint
    extra=1

class ExperienceAdmin(admin.ModelAdmin):
    inlines=[ExperiencePointInline]

class SkillsAdmin(admin.ModelAdmin):
    list_display=("id","name","icon")

class ProjectAdmin(admin.ModelAdmin):
    list_display=("id","name","year","align","link")

admin.site.register(Experience,ExperienceAdmin)
admin.site.register(Skills,SkillsAdmin)
admin.site.register(Project,ProjectAdmin)