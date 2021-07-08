from django.db import models
from .person import Person

class Plan(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
