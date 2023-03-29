# from django.views.generic import ListView, DetailView
#
# from blog.models import Post
#
#
# class PostLV(ListView):
#     model = Post
#     # template_name = 'blog/post_list.html'
#
#
# class PostDV(DetailView):
#     model = Post

from django.views.generic import TemplateView


class PostListTV(TemplateView):
    template_name = 'blog/post_list.html'

class PostDetailTV(TemplateView):
    template_name = 'blog/post_detail.html'

class PostDetailImgTV(TemplateView):
    template_name = 'blog/post_detail_img.html'

class PostInutTV(TemplateView):
    template_name = 'blog/post_input.html'
