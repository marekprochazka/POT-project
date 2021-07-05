from django.db import models
from django.contrib.auth.models import User


class Person(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    @staticmethod
    def create_person_from_user(user: User):
        person = Person(user=user)
        person.save()
