from django.utils import timezone
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from apps.keymonitor import utils as keymonitor

class UsabilityWeek(APIView):
    def get(self, request):                
        return Response(keymonitor.get_queryweek())