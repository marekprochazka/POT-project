from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from tracker.models import Plan, Training
from tracker.serializers.training import TrainingCreateSerializer
from tracker.utils.create_exercise_and_add_it_to_training import create_exercise_and_add_it_to_training


class TrainingCreateView(APIView):

    def post(self, request, plan_id):
        serializer = TrainingCreateSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            plan = Plan.objects.get(id=plan_id)
            training_name = data.get('training_name')
            training = Training(name=training_name)
            training.save()
            training.plan.add(plan.id)
            training.save()
            for exercise in data.get('exercises'):
                create_exercise_and_add_it_to_training(training, exercise.get('exercise_name'),
                                                       exercise.get('overload_type'))

            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
