from django.db import models
from .training import Training
from .exercise import Exercise


class ActiveExercise(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    training = models.ManyToManyField(Training, related_name='exercises')
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    last_overload_value = models.IntegerField()
    overload_history = models.CharField(max_length=512)

    def __str__(self):
        return f'{str(self.exercise.name)} | {str(self.training.name)}'
