from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="POT API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/core/', include('core.urls')),
    path('api/tracker/', include('tracker.api.api')),
    path('api/list', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('<path:resource>', TemplateView.as_view(template_name='index.html'), name='index'),
]