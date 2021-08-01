from tracker.models import OverloadType
from tracker.models.exercise import Exercise
from tracker.models.active_exercise import ActiveExercise
from django.db import transaction


@transaction.atomic
def create_exercise_and_add_it_to_training(training, exercise_name, overload_type):
    exercise = Exercise.objects.create(name=exercise_name,
                                       overload_type=OverloadType.objects.get(type_identifier=overload_type))
    exercise.save()
    active_exercise = ActiveExercise.objects.create(training=training,exercise=exercise)
    active_exercise.save()
