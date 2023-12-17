from django.contrib import admin
from django.urls import path, include
from api.keymonitor.apiviews import UsabilityWeek

urlpatterns = [
    path('usability/week', UsabilityWeek.as_view(), name='usability_week')
]