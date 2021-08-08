from rest_framework import serializers

from tracker.models import ActiveExercise


class ActiveExerciseSerializerLite(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    def get_name(self, instance):
        return instance.exercise.name

    class Meta:
        model = ActiveExercise
        fields = ['id', 'name', 'last_overload_value', 'overload_history', 'volume']


class ExerciseCreateSerializer(serializers.Serializer):
    exercise_name = serializers.CharField(max_length=255)
    overload_type = serializers.CharField(max_length=255)
    volume = serializers.CharField(max_length=128)


class ActiveExerciseUpdateSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    new_overload_value = serializers.IntegerField()
