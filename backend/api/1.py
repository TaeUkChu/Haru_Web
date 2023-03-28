import requests
from django.http import JsonResponse
url = 'http://116.38.220.14/resultAPI' # 고정
data = {
    "doc":"자동차 경주" # 문자열 1줄로 요청
    ,"imageId":"4" # 이미지 url 뒤에 붙는 숫자값
    ,"modelId":"1"
        }
result = requests.post(url, json=data)
if result.ok:
    print(result.text)
#return JsonResponse(data=postList, safe=False, status=200)
else:
    print("error")