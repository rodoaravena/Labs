from apps.keymonitor.models import BorrowedKey
from apps.schedules.models import Module, ModuleEvent
import datetime as dt

def get_week(y=dt.date.today().year, w=dt.date.today().isocalendar()[1]):
    first = next(
        (dt.date(y, 1, 1) + dt.timedelta(days=i) 
         for i in range(367)
         if (dt.date(y, 1, 1) + dt.timedelta(days=i)).isocalendar()[1] == w))
    return [first + dt.timedelta(days=i) for i in range(7)]

def get_queryweek():
    week = []
    for m in Module.objects.all().order_by('id'):
        schedules={}
        schedules['module'] = m.name_module
        
        for fecha in get_week():
            me = ModuleEvent.objects.filter(day=fecha,module=m)
            me_assigned = me.count()
            ek_current = BorrowedKey.objects.filter(modulo_evento__gte=me[0],modulo_evento__lte=me.reverse()[0]).count() if me_assigned > 0  else 0
            if fecha.weekday() != 6:
                schedules[str(fecha.strftime('%A')).lower()] = {
                    'assigned':me_assigned,
                    'current':ek_current
                    }
        
        week.append(schedules)
        
    return week