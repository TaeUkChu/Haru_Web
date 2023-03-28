from django.contrib.auth import login, get_user_model, logout, update_session_auth_hash, get_user
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.db.models import Count
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.cache import never_cache
from django.views.generic.detail import BaseDetailView
from django.views.generic.edit import BaseCreateView, BaseUpdateView, BaseDeleteView
from django.views.generic.list import BaseListView
from taggit.models import Tag

from blog.models import Post
from accounts.forms import MyUserCreationForm
from accounts.views import MyLoginRequiredMixin, OwnerOnlyMixin
from api.views_util import connect_model, obj_to_post, prev_next_post, make_tag_cloud, to_hashtag_list

class ApiPostLV(BaseListView):
    # model = Post

    def get_queryset(self):
        tagname = self.request.GET.get('tagname')
        if tagname:
            qs = Post.objects.filter(tags__name=tagname)
        else:
            qs = Post.objects.all()
        return qs

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        postList = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=postList, safe=False, status=200)


class ApiPostDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)
        post['prev'], post['next'] = prev_next_post(obj)
        post['hashtags'] = to_hashtag_list(obj.content)

        return JsonResponse(data=post, safe=True, status=200)


class ApiPostImgDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)
        post['prev'], post['next'] = prev_next_post(obj)
        post['hashtags'] = to_hashtag_list(obj.content)
        # # 이미지 불러오는 함수
        if connect_model(obj.id,obj.content) == 0:
            return JsonResponse(data=post, safe=True, status=200)
        else :
            return JsonResponse(data={}, safe=True, status=404)
class ApiTagCloudLV(BaseListView):
    # model = Tag
    queryset = Tag.objects.annotate(count=Count('post'))
    # def get_queryset(self):
    #     return Tag.objects.all()

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        # postList = [obj_to_post(obj) for obj in qs]
        # tagList = []
        # for obj in qs:
        #     tagList.append({
        #         'name': obj.name,
        #         # 'count': obj.name,
        #         # 'weight': obj.name,
        #     })
        tagList = make_tag_cloud(qs)
        return JsonResponse(data=tagList, safe=False, status=200)


class ApiLoginView(LoginView):
    def form_valid(self, form):
        user = form.get_user()
        login(self.request, user)
        # userDict = vars(user)
        # del userDict['_state'], userDict['password']
        userDict = {
            'id': user.id,
            'username': user.username,
        }
        return JsonResponse(data=userDict, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)

class ApiRegisterView(BaseCreateView):
    # model = get_user_model()
    # fields = '__all__'
    form_class = MyUserCreationForm

    def form_valid(self, form):
        self.object = form.save()
        userDict = {
            'id': self.object.id,
            'username': self.object.username,
        }
        return JsonResponse(data=userDict, safe=True, status=201)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiLogoutView(LogoutView):
    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        logout(request)
        return JsonResponse(data={}, safe=True, status=200)


class ApiPwdchgView(PasswordChangeView):
    def form_valid(self, form):
        form.save()
        update_session_auth_hash(self.request, form.user)
        return JsonResponse(data={}, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiMeView(View):
    def get(self, request, *args, **kwargs):
        user = get_user(request)
        if user.is_authenticated:
            userDict = {
                'id': user.id,
                'username': user.username,
            }
        else:
            userDict = {
                'username': 'Anonymous',
            }
        return JsonResponse(data=userDict, safe=True, status=200)


class ApiPostCV(MyLoginRequiredMixin, BaseCreateView):
    model = Post
    fields = '__all__'

    def form_valid(self, form):
        form.instance.owner = self.request.user
        self.object = form.save()
        post = obj_to_post(self.object)
        return JsonResponse(data=post, safe=True, status=201)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiPostUV(OwnerOnlyMixin, BaseUpdateView):
    model = Post
    fields = '__all__'

    def form_valid(self, form):
        self.object = form.save()
        post = obj_to_post(self.object)
        return JsonResponse(data=post, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiPostDelV(OwnerOnlyMixin, BaseDeleteView):
    model = Post

    def delete(self, request, *args, **kwargs):
        self.object = self.get_object()
        self.object.delete()
        return JsonResponse(data={}, safe=True, status=204)

# import requests
# # from django.shortcuts import render
# import json
# class ApiGenerateView(View):
#     def get(self, request):
#         url = 'http://116.38.220.14/resultAPI'
#         # response = requests.get(url)
#         data = {
#         "doc":"자동차 경주" # 문자열 1줄로 요청
#         ,"imageId":"4" # 이미지 url 뒤에 붙는 숫자값
#         ,"modelId":"1"
#             }
#         json_data = json.dumps(data)
#         response = requests.post(url, data=json_data, headers={'Content-Type': 'application/json'})
#         if response.ok :
#             return JsonResponse(data=response.text, safe=True, status=200)
#         else :
#             print('error')
#     # # print(data)

#     # # return render(request, 'post_detail.html', {'data': data})
#     # # data = connet_model()
#     # JsonResponse(data=data, safe=True, status=200)
