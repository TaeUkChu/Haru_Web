from django.urls import path

from blog import views


app_name = 'blog'
urlpatterns = [
    path('post/list/', views.PostListTV.as_view(), name='post_list'),
    path('post/img/list/', views.PostImgListTV.as_view(), name='post_img_list'),
    path('post/<int:pk>/', views.PostDetailTV.as_view(), name='post_detail'),
    path('post/<int:pk>/img/', views.PostDetailImgTV.as_view(), name='post_detail_img'),

]
