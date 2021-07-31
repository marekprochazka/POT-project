from django.contrib import admin

# Register your models here.
from tracker.models import Plan, ActiveExercise, Exercise, OverloadType, Training


class PlanAdmin(admin.ModelAdmin):
    pass


class ActiveExerciseAdmin(admin.ModelAdmin):
    pass


class ExerciseAdmin(admin.ModelAdmin):
    pass


class OverloadTypeAdmin(admin.ModelAdmin):
    pass


class TrainingAdmin(admin.ModelAdmin):
    pass


admin.site.register(Plan, PlanAdmin)
admin.site.register(ActiveExercise, ActiveExerciseAdmin)
admin.site.register(Exercise, ExerciseAdmin)
admin.site.register(OverloadType, OverloadTypeAdmin)
admin.site.register(Training, TrainingAdmin)
