from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from core.models import Person
from tracker.models.plan import Plan
from tracker.serializers.plan import PlanSerializerLite, PlanCreateSerializer, PlanSerializer
from rest_framework.permissions import IsAuthenticated

from tracker.utils.is_owner_permission import IsPlanOwner


class PlansListView(ListAPIView):
    serializer_class = PlanSerializerLite
    model = Plan
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Plan.objects.filter(person__user=self.request.user).order_by('created_at')


class PlanDetailView(RetrieveAPIView):
    lookup_url_kwarg = 'plan_id'
    serializer_class = PlanSerializer
    queryset = Plan.objects.all()
    permission_classes = (IsAuthenticated, IsPlanOwner)



class PlanCreateView(CreateAPIView):
    serializer_class = PlanCreateSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(person=Person.objects.get(user=self.request.user))


class PlanDeleteView(APIView):
    def delete(self, request, plan_id):
        try:
            plan = Plan.objects.get(id=plan_id)
            plan.delete()
            return Response(status=status.HTTP_200_OK)
        except Plan.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
