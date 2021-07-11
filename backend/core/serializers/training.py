from rest_framework import serializers

from core.models import Training


class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = '__all__'


class TrainingSerializerLite(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['name']
