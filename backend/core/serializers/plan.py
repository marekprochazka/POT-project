from rest_framework import serializers
from core.models.plan import Plan


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'


class PlanCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ['name']

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['plan_id'] = instance.id
        return rep