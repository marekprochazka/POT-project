from rest_framework.permissions import BasePermission
from django.contrib.auth.models import User

from tracker.models import Plan


class IsPlanOwner(BasePermission):
    def has_permission(self, request, view):
        return request.user == Plan.objects.get(id=view.kwargs.get('plan_id')).person.user
