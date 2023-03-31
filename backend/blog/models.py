from django.contrib.auth import get_user_model
from django.db import models
from django.urls import reverse
from taggit.managers import TaggableManager #pip install taggit



class Post(models.Model):
    #제목,요약,날씨,감정,내용,작성날짜,수정날짜,태그,작성자
    title = models.CharField(verbose_name='TITLE', max_length=50)
    description = models.CharField('DESCRIPTION', max_length=100, blank=True, help_text='simple description text.')
    weatherType = models.TextChoices('weatherType', '맑음 비 안개 눈 흐린') #  https://docs.djangoproject.com/en/4.1/topics/db/models/#field-options
    weather = models.CharField(blank=True, choices=weatherType.choices, max_length=10)
    emotionType = models.TextChoices('emotionType', '최고 기쁨 보통 슬픔 최악')
    emotion = models.CharField(blank=True, choices=emotionType.choices, max_length=10)
    content = models.TextField('CONTENT')
    create_dt = models.DateTimeField('CREATE DATE', auto_now_add=True)
    modify_dt = models.DateTimeField('MODIFY DATE', auto_now=True)
    tags = TaggableManager(blank=True)
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name='OWNER', blank=True, null=True)
    check_img = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:post_detail', args=(self.id,))

    def get_prev(self):
        return self.get_previous_by_modify_dt()

    def get_next(self):
        return self.get_next_by_modify_dt()
