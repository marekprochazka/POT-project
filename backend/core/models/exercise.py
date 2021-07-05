from django.db import models
from .training import Training


class Exercise(models.Model):
    training = models.ManyToManyField(Training)
