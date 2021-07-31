from rest_framework import serializers
from core.models.plan import Plan
from .training import TrainingSerializerLite, TrainingSerializer


class PlanSerializer(serializers.ModelSerializer):
    trainings = TrainingSerializer(read_only=True, many=True)
    class Meta:
        model = Plan
        fields = ['created_at', 'name', 'trainings']


class PlanSerializerLite(serializers.ModelSerializer):
    trainings = TrainingSerializerLite(read_only=True, many=True)

    class Meta:
        model = Plan
        fields = ['id', 'name', 'trainings']


class PlanCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ['name']

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['plan_id'] = instance.id
        return rep
