from django.urls import path
from . import views

app_name = "List"

urlpatterns = [
    path("" ,views.To, name="Todolist")
]