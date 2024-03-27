from django.urls import path
from . import views


urlpatterns = [
  
    path('',views.pesca,name="pesca"),
    
]
