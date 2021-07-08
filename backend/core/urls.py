from django.urls import path
from core.api.sign_in import SignInView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'core'

urlpatterns = [
    path('login', TokenObtainPairView.as_view(), name='login'),
    path('refresh-token', TokenRefreshView.as_view(), name='refresh_token'),
    path('sign-in', SignInView.as_view(), name='sing_in')
]