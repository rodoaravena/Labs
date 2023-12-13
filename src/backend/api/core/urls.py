from django.contrib import admin
from django.urls import path, include
from api.core.apiviews import Dashboard

urlpatterns = [
    path('dashboard/', Dashboard.as_view, name='dashboard_api')
]