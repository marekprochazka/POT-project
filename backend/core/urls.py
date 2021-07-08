from django.urls import path
from core.api.sign_in import SignInView

app_name = 'core'

urlpatterns = [
    path('sign-in', SignInView.as_view())
]