from django.db import models
from .overload_type import OverloadType


class Exercise(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    overload_type = models.ForeignKey(OverloadType, on_delete=models.PROTECT)
    name = models.CharField(max_length=255)

    def __str__(self):
        return str(self.name)
