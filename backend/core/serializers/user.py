from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    fullname = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
    confirm = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ['username', 'fullname', 'password', 'confirm']
