# Generated by Django 3.2.5 on 2021-07-31 16:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20210731_1831'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exercise',
            name='overload_type',
        ),
        migrations.RemoveField(
            model_name='plan',
            name='person',
        ),
        migrations.RemoveField(
            model_name='training',
            name='plan',
        ),
        migrations.DeleteModel(
            name='ActiveExercise',
        ),
        migrations.DeleteModel(
            name='Exercise',
        ),
        migrations.DeleteModel(
            name='OverloadType',
        ),
        migrations.DeleteModel(
            name='Plan',
        ),
        migrations.DeleteModel(
            name='Training',
        ),
    ]
