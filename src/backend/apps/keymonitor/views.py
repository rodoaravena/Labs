from django.http import HttpResponse
from .models import Key,Teacher,Entrega_Key
from django.shortcuts import render, redirect
from apps.core.models import Workstation, Room, Campus
from apps.schedules.models import RoomPetition,ModuleEvent,Module
from .forms import KeyForm, TeacherForm, EntregaForm
from django.views.generic import TemplateView, ListView, UpdateView, CreateView, DeleteView
from django.urls import reverse_lazy
from datetime import date, timedelta, datetime
from django.core.mail import send_mail
from django.db.models import Q





#Vistas con funciones


def listar_llave(request):
    sala = Room.objects.all() #consulta BD
    docente = Teacher.objects.all()
    entrega = Entrega_Key.objects.all()
    key_form = KeyForm()
    entrega_form = EntregaForm()
    template_name = 'listado_salas.html'
    
    if request.method == 'POST':
        key_form = KeyForm(request.POST)
        if key_form.is_valid():
            key_form.save()
            return redirect('listado_salas.html')
            
    if request.method == 'POST':
        entrega_form = EntregaForm(request.POST)
        if entrega_form.is_valid():
            entrega_form.save()
            llave_prestada = Key.objects.get(id=entrega_form.instance.llave.id)
            llave_prestada.prestada = True
            llave_prestada.save()
        else:
            entrega_form = EntregaForm()    
    
    if request.method == 'POST':
        entrega_form = EntregaForm(request.POST)
        if entrega_form.is_valid():
            entrega_form.save()
            llave_devuelta = Key.objects.get(id=entrega_form.instance.llave.id)
            llave_devuelta.prestada = False
            llave_devuelta.save()
    
             
                    
    context={}
    context['room'] = sala
    context['key_form'] = key_form
    context['docente'] = docente
    context['entrega'] = entrega
    context['entrega_form'] = entrega_form
    return render(request,template_name ,context) #mandar consulta al template como diccionario

#funcion agregar llave
def crear_llave(request):
    template_name = "crear_llave.html"
    context = {}
    if request.method == 'POST':
        key_form = KeyForm(request.POST)
        if key_form.is_valid():
            key_form.save()
            return redirect('listado_salas.html') #agregar url
        
    #obtener el formulario y llenarlo, crear contenido
    
            
    return render(request,template_name, context) #agregar html  


def entregar_llave(request):
    template_name = "entrega_llave.html"
    context = {}
    if request.method == 'POST':
        entrega_form = EntregaForm(request.POST)
        if entrega_form.is_valid():
            entrega_form.save()
            return redirect('listado_salas.html')
        
         
   
    return render(request,template_name,context)   


def listar_docente(request):
    docente = Teacher.objects.all()
    sala = Room.objects.all() 
    teacher_form = TeacherForm()
    editar = Teacher.objects.filter(rut="")
    template_name = 'listado_docentes.html'
    
   

    
    if request.method == 'POST':
        teacher_form = TeacherForm(request.POST)
        if teacher_form.is_valid():
            teacher_form.save()
    
    
    
    context ={}
    context['editar']= editar
    context['room'] = sala
    context['docente'] = docente
    context['teacher_form'] = teacher_form
                
    return render(request,template_name,context)
    

def crear_docente(request):
    template_name= "crear_docente.html"
    context ={}
    if request.method == 'POST':
        teacher_form = TeacherForm(request.POST)
        if teacher_form.is_valid():
            teacher_form.save()
            return redirect('listado_docente.html') #agregar url
        
    
    teacher_form = TeacherForm()
    context['teacher_form'] = teacher_form
    return render(request,template_name,context) #agregar html       
    
def eliminar_llavelog(request,id):
    template_name = 'eliminar_llave.html'
    context={}
    llave = Key.objects.get(id = id)
    if request.method == 'POST':
        llave.estado_llave = False
        llave.save()
        return redirect('listado_salas.html')
    return render(request,template_name,context)


def eliminar_docente(request,rut):
    template_name = 'eliminar_docente.html'
    context={}
    docente = Teacher.objects.get(rut = rut)
    if request.method == 'POST':
        docente.delete()
        return redirect('listado_docentes.html')
    return render(request,template_name,context)



def editar_docente(request,rut):
    docente = Teacher.objects.get(rut = rut)
    if request.method == 'GET': #pedir la informacion(renderisarla)
        teacher_form = TeacherForm(instance = docente) 
    else:#grabar lo editado
        teacher_form = TeacherForm(request.POST, instance = docente)
        if teacher_form.is_valid():
            teacher_form.save()
            return redirect('listado_docente.html') 
    return render(request,'crear_docente.html',{'teacher_form':teacher_form})



def enviar_correo_docente(request):
    subject = 'Recordatorio de entrega de llave'
    message = 'Este es un mensaje para recordar que usted tiene una entrega pendiente de la llave xxx.'
    from_email = 'keymonitor.soporte@gmail.com'
    recipient_list = ['diegoalegriap@gmail.com']

    send_mail(subject, message, from_email, recipient_list)

    return render(request, 'listado_docente.html')


def calendario_day(request):
    modulos = ModuleEvent.objects.filter(day=(), module='1')
    print(modulos)
    #modulos1= ModuleEvent.objects.filter()
    #modulos2 = ModuleEvent.objects.filter(Module=1D, peticion)
    template_name = "calendario_dias.html"
    context = {}
    context['modulos'] = modulos
    return render(request,template_name,context)
 













#Vistas con clases

class ListadoLlave(ListView):
    model = Key
    template_name = 'listado_salas.html'
    context_object_name = 'llave'
    queryset = Key.objects.filter(estado_llave = True)

class EditaDocente(UpdateView):
    model = Teacher
    template_name = 'crear_docente.html'
    form_class = TeacherForm
    success_url = reverse_lazy('listado_salas.html')

class CrearLlave(CreateView):
    model= Key
    form_class = KeyForm
    template_name= 'crear_llave.html'
    success_url = reverse_lazy('listado_salas.html')

class EliminarLlavelog(DeleteView):
    model=Key
    success_url = reverse_lazy('listado_salas.html')

class EliminarDocente(DeleteView):
    model=Teacher
    success_url =reverse_lazy('listado_docentes')    
