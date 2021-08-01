from tracker.models import ActiveExercise


def update_active_exercise_overload(active_exercise_id, overload_value):
    active_exercise = ActiveExercise.objects.get(id=active_exercise_id)
    active_exercise.last_overload_value = overload_value
    active_exercise.overload_history += f'{overload_value};'
    active_exercise.save()
