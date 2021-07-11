from rest_framework import serializers
from core.models.plan import Plan
from .training import TrainingSerializerLite

class PlanSerializer(serializers.ModelSerializer):
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