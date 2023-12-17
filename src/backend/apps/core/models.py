from django.db import models
from django.contrib.auth.models import User as auth_user
from datetime import datetime
import os


class Campus(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    location_latitude = models.CharField(max_length=50, blank=True, null=True)
    location_longitude = models.CharField(max_length=50, blank=True, null=True)
    active = models.BooleanField(default=True)
    inactive_by = models.TextField(default="", blank=True, null=True)
    
    class Meta:
        verbose_name = 'Campus'
        verbose_name_plural = 'Campuses'

    def __str__(self):
        return self.name


class Room(models.Model):
    room_name = models.CharField(max_length=50, blank=True, null=True)
    campus = models.ForeignKey(
        Campus, on_delete=models.SET_NULL, blank=True, null=True)
    address = models.CharField(max_length=250, blank=True, null=True)
    created_date = models.DateField(auto_now_add=True)
    active = models.BooleanField(default=True)
    inactive_by = models.TextField(default="")

    def __str__(self):
        return "{} - {}".format(self.campus.name, self.room_name)

    def __unicode__(self):
        return "{} - {}".format(self.campus.name, self.room_name)


class Workstation(models.Model):
    name = models.CharField(max_length=25)
    ip = models.CharField(max_length=50, blank=True, null=True)
    serial_number = models.CharField(max_length=50, blank=True, null=True)
    specs = models.JSONField(null=True)
    room = models.ForeignKey(
        Room, on_delete=models.SET_NULL, blank=True, null=True)
    active = models.BooleanField(default=True)
    inactive_by = models.TextField(default="")

    def __str__(self):
        return "{}".format(self.name)

    def __unicode__(self):
        return "{}".format(self.name)
    
class ExternalUser(models.Model):
    unique_id = models.CharField(max_length=50)
    full_name = models.CharField(max_length=50)
    email=models.EmailField(null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    
    def __str__(self) -> str:
        return f'{self.unique_id} - {self.full_name}'
    
    
    
