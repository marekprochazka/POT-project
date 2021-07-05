from django.db import models
from .person import Person

class Plan(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
