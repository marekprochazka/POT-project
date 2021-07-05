from django.db import models
from .plan import Plan

class Training(models.Model):
    plan = models.ManyToManyField(Plan)
