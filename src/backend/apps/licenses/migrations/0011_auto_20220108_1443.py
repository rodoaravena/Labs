# Generated by Django 3.2 on 2022-01-08 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('licenses', '0010_auto_20211205_1022'),
    ]

    operations = [
        migrations.AddField(
            model_name='licenseslist',
            name='license_key',
            field=models.CharField(blank=True, max_length=3000),
        ),
        migrations.AlterField(
            model_name='softwareform',
            name='status',
            field=models.IntegerField(choices=[(1, 'Igresada'), (2, 'en proceso'), (3, 'Aprobada'), (4, 'Rechazada')], default=1),
        ),
    ]
