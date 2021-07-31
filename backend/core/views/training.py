from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from core.models import Plan, Training


class TrainingCreateView(APIView):
    def post(self, request, plan_id):
        plan = Plan.objects.get(id=plan_id)
        name = request.data.get('name')
        training = Training.objects.create(plan=plan, name=name)
        training.save()
        return Response(status=status.HTTP_201_CREATED)
