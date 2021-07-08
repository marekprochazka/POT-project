from rest_framework.generics import ListAPIView
from core.models.plan import Plan
from core.serializers.plan import PlanSerializer
from rest_framework.permissions import IsAuthenticated


class PlansListView(ListAPIView):
    serializer_class = PlanSerializer
    model = Plan
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return Plan.objects.all().order_by('created_at')
