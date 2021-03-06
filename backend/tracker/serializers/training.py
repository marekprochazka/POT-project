from rest_framework import serializers

from tracker.models import Training
from tracker.serializers.exercise import ActiveExerciseSerializerLite, ExerciseCreateSerializer


class TrainingSerializer(serializers.ModelSerializer):
    exercises = ActiveExerciseSerializerLite(read_only=True, many=True)

    class Meta:
        model = Training
        fields = ['id', 'name', 'exercises']


class TrainingSerializerLite(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['name']





class TrainingCreateSerializer(serializers.Serializer):
    training_name = serializers.CharField(max_length=255)
    exercises = ExerciseCreateSerializer(many=True)
