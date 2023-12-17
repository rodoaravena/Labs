from django import forms
from .models import Key, Teacher, Entrega_Key
from django.core.exceptions import ValidationError
from django.forms.widgets import Select



class KeyForm(forms.ModelForm):
    class Meta:
        model = Key

        fields = ['room']

        widgets = {'room':Select(attrs={'class':'form-control selectpicker'})}

        labels = {'room': "Seleccione sala"}



class TeacherForm(forms.ModelForm):
    class Meta:
        model = Teacher

        fields = ['name','email','telefono','rut']

        widgets = {
            'name': forms.TextInput(attrs={
                'class':'form-control',
                'placeholder':'Ingrese nombre',
                }),
            'email': forms.EmailInput(attrs={
                'class':'form-control',
                'placeholder':'Ingrese email',
                }),
            'telefono': forms.TextInput(attrs={
                'class':'form-control',
                'placeholder':'Ingrese telefono',
                }),
            'rut': forms.TextInput(attrs={
                'class':'form-control',
                'placeholder':'Ingrese rut',
            })
            }

        labels = {'name': 'Nombre docente',
                  'email': 'Email',
                  'telefono': 'Telefono',
                  'rut': 'Rut'}
        


class EntregaForm(forms.ModelForm):
    class Meta:
        model =  Entrega_Key

        fields = ['llave','profesor']

        widgets= {'llave':forms.TextInput(attrs={
            'class':'form-control',
            'placeholder':'Ingrese codigo de llave',}),
                  'profesor':Select(attrs={'class':'form-control selectpicker'})
                  }

        labels={
            'llave':'Codigo llave',
            'profesor':'Docente'
        }       