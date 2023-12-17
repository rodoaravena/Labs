from django.db import models
from django.contrib.auth.models import User as dj_user
from apps.core.models import Room
from apps.schedules.models import RoomPetition,ModuleEvent,Module
from django.utils import timezone
from django.core.mail import send_mail
from django.conf import settings


class Key(models.Model):
    id = models.AutoField(primary_key= True)
    room=models.ForeignKey(Room,on_delete=models.CASCADE)
    description=models.TextField(blank=True, null=True)
    prestada = models.BooleanField(default=False)
    estado_llave= models.BooleanField('Estado llave',default=True)##Desactivar llave##
    
    class Meta:
        verbose_name = 'Key'
        verbose_name_plural = 'Keys'
        ordering =  ['room']
    
        
    def __str__(self):
       return f"{self.room}"

    

class Teacher(models.Model):
    name=models.CharField(max_length=200)
    email=models.EmailField()
    telefono=models.CharField(max_length=15)
    rut=models.CharField(primary_key=True, max_length=9,null=False,blank=False)
    
    class Meta:
        verbose_name = 'Teacher'
        verbose_name_plural = 'Teachers'
        ordering = ['name'] 
    
    def __str__(self):
        return self.name
    
    


class Entrega_Key(models.Model):
    llave=models.ForeignKey(Key, on_delete=models.CASCADE)
    profesor=models.ForeignKey(Teacher, on_delete=models.CASCADE)
    key_entrega =models.DateTimeField(default=timezone.now)
    key_devolucion =models.DateTimeField(null=True, blank=True) #momento de la entrega el campo es null
    fecha_entraga=models.DateField('Fecha de entrega',auto_now=True,auto_now_add=False) #fecha de entrega
    
    class Meta:
        verbose_name ='Entrega'
        verbose_name_plural = 'Entregas'
        ordering = ['profesor']
  

    def __str__(self):
        return f"{self.profesor.name} tiene la llave {self.llave.room} el {self.key_entrega} y la devolvió el {self.key_devolucion}"


    def calcular_tiempo_uso(self):
        tiempo_uso = (self.key_entrega - self.key_devolucion).seconds //3600
        return tiempo_uso
    

    def notificar_prestamos_vencidos(request):
        prestamos_vencidos = Entrega_Key.objects.filter(fecha_devolucion__isnull=True, key_entrega__lte=timezone.now()-timezone.timedelta(days=2))
        for prestamo in prestamos_vencidos:
            send_mail(
            '   Recordatorio de devolución de llave',
                f'Hola {prestamo.profesor.name}, este es un recordatorio que debes devolver la llave {prestamo.llave.room} que se le entrego el día {prestamo.key_entrega}.',
            '   noreply@example.com',
                [prestamo.profesor.email],
                fail_silently=False,
        )

    


    
    
