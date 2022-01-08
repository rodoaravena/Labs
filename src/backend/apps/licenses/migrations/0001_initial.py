# Generated by Django 3.2 on 2022-01-05 01:23


from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TypeLicense',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.TextField(default='')),
                ('description', models.TextField(default='')),
            ],
            options={
                'verbose_name': 'Tipo de licencia',
                'verbose_name_plural': 'Tipo de licencia',
            },
        ),
        migrations.CreateModel(
            name='SoftwareForm',
            fields=[
                ('id_request', models.AutoField(primary_key=True, serialize=False)),
                ('status', models.IntegerField(choices=[(1, 'Igresada'), (2, 'en proceso'), (3, 'Aprobada'), (4, 'Rechazada')], default=1)),
                ('creation_date', models.DateField(auto_now=True, verbose_name='Creation date')),
                ('name_user', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('rut', models.CharField(max_length=10)),
                ('email', models.CharField(max_length=50)),
                ('subject', models.CharField(max_length=100)),
                ('nrc', models.CharField(max_length=8)),
                ('software_name', models.CharField(max_length=100)),
                ('details', models.CharField(max_length=330)),
                ('room_name', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.room')),
                ('software_type', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='licenses.typelicense')),
            ],
            options={
                'verbose_name': 'solicitud',
                'verbose_name_plural': 'solicitudes',
            },
        ),
        migrations.CreateModel(
            name='LicensesList',
            fields=[
                ('id_license', models.AutoField(primary_key=True, serialize=False)),
                ('license_name', models.CharField(max_length=40)),
                ('license_stock', models.PositiveSmallIntegerField()),
                ('license_due_date', models.DateField()),
                ('license_type', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='licenses.typelicense')),
            ],
            options={
                'verbose_name': 'license',
                'verbose_name_plural': 'licenses',
            },
        ),
    ]
