from django.urls import path
from core.views.sign_in import SignInView
from core.views.logout import LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from core.views.plan import PlansListView, PlanCreateView, PlanDetailView, PlanDeleteView
from core.views.training import TrainingCreateView

app_name = 'core_api'

urlpatterns = [
    path('login', TokenObtainPairView.as_view(), name='login'),
    path('sign-in', SignInView.as_view(), name='sing_in'),
    path('logout', LogoutView.as_view(), name='logout'),

    path('plan/list', PlansListView.as_view(), name='plan_list'),
    path('plan/create', PlanCreateView.as_view(), name='plan_create'),
    path('plan/delete/<str:plan_id>', PlanDeleteView.as_view(), name='plan_delete'),
    path('plan/detail/<str:plan_id>', PlanDetailView.as_view(), name='plan_detail'),

    path('training/create/<str:plan_id>', TrainingCreateView.as_view(), name='training_create')

]