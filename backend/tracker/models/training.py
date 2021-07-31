from django.db import models
from .plan import Plan


class Training(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    plan = models.ManyToManyField(Plan, related_name='trainings')
    name = models.CharField(max_length=255)

    def __str__(self):
        return str(self.name)
