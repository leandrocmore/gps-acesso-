from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
    path('direct/',views.Direcionada,name="Direcionada")
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
