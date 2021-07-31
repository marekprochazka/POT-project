from rest_framework import serializers

from core.models import Training
from core.serializers.exercise import ExerciseSerializerLite


class TrainingSerializer(serializers.ModelSerializer):
    exercises = ExerciseSerializerLite(read_only=True, many=True)

    class Meta:
        model = Training
        fields = ['id', 'name', 'exercises']


class TrainingSerializerLite(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['name']
