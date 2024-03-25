from django.shortcuts import render
from django.http import HttpResponse

def pesca(request, *args, **kwargs):
    return render(request,'templates0/index.html')