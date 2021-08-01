from rest_framework import serializers

from tracker.models import ActiveExercise


class ActiveExerciseSerializerLite(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    def get_name(self, instance):
        return instance.exercise.name

    class Meta:
        model = ActiveExercise
        fields = ['name', 'last_overload_value', 'overload_history']
