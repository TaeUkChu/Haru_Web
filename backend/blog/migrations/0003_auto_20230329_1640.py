# Generated by Django 3.2.12 on 2023-03-29 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20230328_2049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='emotion',
            field=models.CharField(blank=True, choices=[('최고', '최고'), ('기쁨', '기쁨'), ('보통', '보통'), ('슬픔', '슬픔'), ('최악', '최악')], max_length=10),
        ),
        migrations.AlterField(
            model_name='post',
            name='weather',
            field=models.CharField(blank=True, choices=[('맑음', '맑음'), ('비', '비'), ('안개', '안개'), ('눈', '눈'), ('흐린', '흐린')], max_length=10),
        ),
    ]
