from rest_framework.views import APIView
from core.serializers.user import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.db.utils import IntegrityError


class SignInView(APIView):

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                if serializer.data['password'] == serializer.data['confirm']:
                    user = User.objects.create_user(username=serializer.data['username'],
                                                    email=serializer.data['username'],
                                                    password=make_password(serializer.data['password']))
                    user.first_name = serializer.data['fullname']
                    user.save()
                    return Response('Sucess!', status=status.HTTP_200_OK)
                else:
                    return Response('Passwords don\'t match', status=status.HTTP_400_BAD_REQUEST)
            except IntegrityError:
                return Response('User already exist', status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
