from django.db import models
from .person import Person


class Plan(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=False, blank=False, default='Plan')
    is_active = models.BooleanField(default=True, null=False)

    def __str__(self):
        return f"{str(self.name)} | {str(self.person.user.username)}"
