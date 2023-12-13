from apps.monitoring.models import TicketReport
from apps.monitoring.serializers import TicketReportSerializer

def count_active_tickets():
    ticket_report = TicketReport.objects
    
    return ticket_report.filter(state='A').count()
    
