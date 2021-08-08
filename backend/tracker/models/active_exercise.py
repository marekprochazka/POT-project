from django.db import models
from .training import Training
from .exercise import Exercise


class ActiveExercise(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    training = models.ForeignKey(Training, related_name='exercises', on_delete=models.PROTECT)
    exercise = models.ForeignKey(Exercise, on_delete=models.PROTECT)
    last_overload_value = models.IntegerField(default=0)
    overload_history = models.CharField(max_length=512, default='0;')
    volume = models.CharField(max_length=128)

    def __str__(self):
        return f'{str(self.exercise.name)} | {str(self.training.name)}'
