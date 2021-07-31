from django.contrib import admin
from core.models import Person
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin as ImpOutsdatingTokenAdmin
from rest_framework_simplejwt.token_blacklist.admin import OutstandingToken


# Register your models here.
class PersonAdmin(admin.ModelAdmin):
    pass


# Edited token admin, default one caused inability to delete user
class OutstandingTokenAdmin(ImpOutsdatingTokenAdmin):
    def has_delete_permission(self, *args, **kwargs):
        return True


admin.site.unregister(OutstandingToken)
admin.site.register(OutstandingToken, OutstandingTokenAdmin)

admin.site.register(Person, PersonAdmin)
