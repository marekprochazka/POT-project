from django.db import models


class OverloadType(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    type_description = models.CharField(max_length=255, null=False, blank=False)
    type_identifier = models.CharField(max_length=10, null=False, blank=False)

    def __str__(self):
        return str(self.type_identifier)
