from django.urls import path
from core.views.sign_in import SignInView
from core.views.logout import LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView

app_name = 'core_api'

urlpatterns = [
    path('login', TokenObtainPairView.as_view(), name='login'),
    path('sign-in', SignInView.as_view(), name='sing_in'),
    path('logout', LogoutView.as_view(), name='logout'),
]