from django.urls import path
from core.api.sign_in import SignInView
from core.api.logout import LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from core.api.plan import PlansListView, PlanCreateView

app_name = 'core_api'

urlpatterns = [
    path('login', TokenObtainPairView.as_view(), name='login'),
    path('sign-in', SignInView.as_view(), name='sing_in'),
    path('plan/list', PlansListView.as_view(), name='plan_list'),
    path('logout', LogoutView.as_view(), name='logout'),
    path('plan/create', PlanCreateView.as_view(), name='plan_create')
]