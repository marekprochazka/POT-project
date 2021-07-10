from django.db import models
from django.contrib.auth.models import User


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    @staticmethod
    def create_person_from_user(user: User):
        person = Person(user=user)
        person.save()

    def __str__(self):
        return str(self.user.username)