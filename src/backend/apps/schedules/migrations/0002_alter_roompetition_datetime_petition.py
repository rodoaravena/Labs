# Generated by Django 3.2 on 2022-01-05 16:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedules', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='roompetition',
            name='datetime_petition',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now, null=True),
        ),
    ]