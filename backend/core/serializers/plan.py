from rest_framework import serializers
from core.models.plan import Plan


class PlanSerializer(serializers.Serializer):
    class Meta:
        model = Plan
        fields = '__all__'