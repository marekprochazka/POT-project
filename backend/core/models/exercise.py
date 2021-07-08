from django.db import models
from .training import Training


class Exercise(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    training = models.ManyToManyField(Training)
