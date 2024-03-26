from django.urls import path
from . import views


urlpatterns = [
  
    path('pesca/',views.pesca,name="pesca"),
    
]
