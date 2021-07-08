from django.db import models
from .plan import Plan

class Training(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    plan = models.ManyToManyField(Plan)
