from django.urls import path

from tracker.views.plan import PlansListView, PlanCreateView, PlanDeleteView, PlanDetailView
from tracker.views.training import TrainingCreateView

app_name = 'tracker_api'

urlpatterns = [
    path('plan/list', PlansListView.as_view(), name='plan_list'),
    path('plan/create', PlanCreateView.as_view(), name='plan_create'),
    path('plan/delete/<str:plan_id>', PlanDeleteView.as_view(), name='plan_delete'),
    path('plan/detail/<str:plan_id>', PlanDetailView.as_view(), name='plan_detail'),

    path('training/create/<str:plan_id>', TrainingCreateView.as_view(), name='training_create')

]