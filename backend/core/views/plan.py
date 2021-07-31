from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.viewsets import ModelViewSet

from core.models import Person
from core.models.plan import Plan
from core.serializers.plan import PlanSerializer, PlanCreateSerializer
from rest_framework.permissions import IsAuthenticated


class PlansListView(ListAPIView):
    serializer_class = PlanSerializer
    model = Plan
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Plan.objects.filter(person__user=self.request.user).order_by('created_at')


class PlanDetailView(RetrieveAPIView):
    pass


class PlanCreateView(CreateAPIView):
    serializer_class = PlanCreateSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(person=Person.objects.get(user=self.request.user))
