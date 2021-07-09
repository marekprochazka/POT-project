from django.urls import path
from core.api.sign_in import SignInView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from core.api.plan import PlansListView

app_name = 'core_api'

urlpatterns = [
    path('login', TokenObtainPairView.as_view(), name='login'),
    path('refresh-token', TokenRefreshView.as_view(), name='refresh_token'),
    path('sign-in', SignInView.as_view(), name='sing_in'),
    path('plans-list', PlansListView.as_view(), name='plan_list')
]