# Generated by Django 3.2 on 2021-09-27 03:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('licenses', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='SoftwareRequestModel',
            new_name='SoftwareForm',
        ),
    ]