# Generated by Django 4.2.3 on 2023-12-17 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExternalUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unique_id', models.CharField(max_length=50)),
                ('full_name', models.CharField(max_length=50)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('phone_number', models.CharField(blank=True, max_length=15, null=True)),
            ],
        ),
        migrations.AlterModelOptions(
            name='campus',
            options={'verbose_name': 'Campus', 'verbose_name_plural': 'Campuses'},
        ),
        migrations.RenameField(
            model_name='workstation',
            old_name='pc_serialnumber',
            new_name='serial_number',
        ),
        migrations.RemoveField(
            model_name='workstation',
            name='disk_capacity',
        ),
        migrations.RemoveField(
            model_name='workstation',
            name='disk_type',
        ),
        migrations.RemoveField(
            model_name='workstation',
            name='monitor_inches',
        ),
        migrations.RemoveField(
            model_name='workstation',
            name='monitor_model',
        ),
        migrations.RemoveField(
            model_name='workstation',
            name='monitor_serialnumber',
        ),
        migrations.RemoveField(
            model_name='workstation',
            name='pc_model',
        ),
        migrations.RemoveField(
            model_name='workstation',
            name='processor_model',
        ),
        migrations.RemoveField(
            model_name='workstation',
            name='ram_capacity',
        ),
        migrations.AddField(
            model_name='workstation',
            name='specs',
            field=models.JSONField(null=True),
        ),
    ]