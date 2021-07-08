from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Person
from django.contrib.auth.models import User


@receiver(post_save, sender=User)
def create_person_action(sender, instance, created, **kwargs):
    Person.create_person_from_user(instance)