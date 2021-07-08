from django.contrib import admin
from core.models import Person


# Register your models here.
class PersonAdmin(admin.ModelAdmin):
    pass


admin.site.register(Person, PersonAdmin)
