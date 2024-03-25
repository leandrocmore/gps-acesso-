from django.shortcuts import render
from django.http import HttpResponse

def index(request, *args, **kwargs):
    return render(request,'templates/index.html')

