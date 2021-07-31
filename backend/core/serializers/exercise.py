from rest_framework import serializers

from core.models import ActiveExercise


class ExerciseSerializerLite(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    def get_name(self, instance):
        return instance.exercise.name

    class Meta:
        model = ActiveExercise
        fields = ['name', 'overload_value']
