from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-core/', include('core.urls')),
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('<path:resource>', TemplateView.as_view(template_name='index.html'), name='index'),
]