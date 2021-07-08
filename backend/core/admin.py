from django.contrib import admin
from core.models import Person, Plan


# Register your models here.
class PersonAdmin(admin.ModelAdmin):
    pass


class PlanAdmin(admin.ModelAdmin):
    pass


admin.site.register(Person, PersonAdmin)
admin.site.register(Plan, PlanAdmin)
