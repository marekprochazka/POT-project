from django.db import models


class OverloadType(models.Model):
    IDENTIFIER_WEIGHT = 'weight'
    
    created_at = models.DateTimeField(auto_now_add=True)
    type_description = models.CharField(max_length=255)
    type_identifier = models.CharField(max_length=10)

    def __str__(self):
        return str(self.type_identifier)
