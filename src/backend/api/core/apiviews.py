from django.utils import timezone
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from datetime import datetime, timedelta
from apps.core import utils as core
from apps.monitoring import utils as monitoring
from apps.activity import utils as activity

class Dashboard(APIView):
    def get(self, request, format='json'):
        response = {}
        ranges = request.data.get("ranges")
        response['open_tickets'] = monitoring.count_active_tickets()
        response['energy_chart'] = activity.get_dashboard_chart()
        
        return Response(response)