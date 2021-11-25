from django import forms
from django.db.models.base import Model
from django.db.models.fields import CharField, DateField, EmailField, DateTimeField
from django.forms import fields
from datetime import date, datetime
from django.forms import widgets
from django.forms.forms import Form
from django.forms.widgets import DateInput, EmailInput, TimeInput
from apps.schedules.models import LabPetition, modulepetition, module
from django.forms import ModelForm, Textarea

class LabPetitionForm(forms.ModelForm):
    class Meta:
        model = LabPetition
        fields = [
            'name_petition',
            'email_petition',
            'nrc_petition',
            'campus_petition',
            'laboratory_petition',
            'cant_pc_petition',
            'day_start_petition',
            'day_finish_petition',
            'memo_petition',
            'status_petition',
        ]
        labels = {
            'name_petition':'Nombre:',
            'email_petition':'Email:',
            'nrc_petition':'NRC:',
            'campus_petition':'Sede:',
            'laboratory_petition':'Laboratorio:',
            'cant_pc_petition':'Computadores:',
            'day_start_petition':'Fecha inicio:',
            'day_finish_petition':'Fecha termino:',
            'memo_petition':'Mensaje:',
            'status_petition':'Status:',
        }

        widgets={
            'email_petition':EmailInput(attrs={}),
            'day_start_petition':DateInput(attrs={'id':'kt_datepicker_7', 'data-date-format':'dd/mm/yyyy', 'readonly':'readonly'}),
            'day_finish_petition':DateInput(attrs={'id':'kt_datepicker_7', 'data-date-format':'dd/mm/yyyy', 'readonly':'readonly'}),
            'memo_petition':Textarea(attrs={'cols': 40, 'rows': 5})
        }

    def __init__(self,*args, **kwargs):
        super(LabPetitionForm, self).__init__(*args,**kwargs)
        self.fields['name_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['email_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['nrc_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['campus_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['laboratory_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['cant_pc_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['day_start_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['day_finish_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['memo_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['status_petition'].widget.attrs.update({'class':'form-control'})
        self.fields['day_start_petition'].input_formats=[ '%d/%m/%Y' ]
        self.fields['day_finish_petition'].input_formats=[ '%d/%m/%Y' ]


class ModuleForm(forms.ModelForm):
    class Meta:
        model = module
        fields = [ 
            'name_module',
            'start_module',
            'finish_module',
        ]
        labels = {
            'name_module':'Nombre del Modulo',
            'start_module':'Hora de inicio',
            'finish_module':'Hora de termino',
        }
        widgets={
            'start_module':TimeInput(attrs={'id':'kt_timepicker_5'}),
            'finish_module':TimeInput(attrs={'id':'kt_timepicker_5'}),
        }
    def __init__(self,*args, **kwargs):
        super(ModuleForm, self).__init__(*args,**kwargs)
        self.fields['name_module'].widget.attrs.update({'class':'form-control'})
        self.fields['start_module'].widget.attrs.update({'class':'form-control'})
        self.fields['finish_module'].widget.attrs.update({'class':'form-control'})

class ModulePetitionForm(forms.ModelForm):
    class Meta:
        model = modulepetition
        fields = [ 
            'day_mp',
            'module_start_mp',
            'module_finish_mp',
            'labpetition_mp',
        ]
        labels = {
            'day_mp':'Dia:',
            'module_start_mp': 'Modulo inicio:',
            'module_finish_mp': 'Modulo final:',
        }
        widgets={

        }
    def __init__(self,*args, **kwargs):
        super(ModulePetitionForm, self).__init__(*args,**kwargs)
        self.fields['day_mp'].widget.attrs.update({'class':'form-control'})
        self.fields['module_start_mp'].widget.attrs.update({'class':'form-control'})
        self.fields['module_finish_mp'].widget.attrs.update({'class':'form-control'})