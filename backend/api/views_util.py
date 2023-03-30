# import server_url

def obj_to_post(obj):
    post = dict(vars(obj))

    if obj.modify_dt:
        post['modify_dt'] = obj.modify_dt.strftime('%Y-%m-%d %H:%M')
    else:
        post['modify_dt'] = ''
    if obj.create_dt:
        post['create_dt'] = obj.create_dt.strftime("%Y-%m-%d")
    else:
        post['create_dt'] = ''

    if obj.tags:
        post['tags'] = [tag.name for tag in obj.tags.all()]
    else:
        post['tags'] = []

    if obj.owner:
        post['owner'] = obj.owner.username
    else:
        post['owner'] = 'Anonymous'

    # if obj.check_img:
    #     post['check_img'] = 'True'
    # else:
    #     post['check_img'] = 'False'

    del post['_state']

    # #수정 사항
    # if obj.content:
    #     post['content'] = "Kobbert로 바뀐 문법\n" + FindKey(obj.content).textkey(1,2)[0][0]
    # else :
    #     post['content'] = ''
    return post


def prev_next_post(obj):
    try:
        prevObj = obj.get_prev()
        prevDict = {'id': prevObj.id, 'title': prevObj.title}
    except obj.DoesNotExist as e:
        prevDict = {}

    try:
        nextObj = obj.get_next()
        nextDict = {'id': nextObj.id, 'title': nextObj.title}
    except obj.DoesNotExist as e:
        nextDict = {}

    return prevDict, nextDict


def make_tag_cloud(qsTag):
    minCount = min(tag.count for tag in qsTag)
    maxCount = max(tag.count for tag in qsTag)

    # minWeight, maxWeight = 1, 3
    def get_weight_func(minWeight, maxWeight):
        if minCount == maxCount:
            factor = 1.0
        else:
            factor = (maxWeight - minWeight) / (maxCount - minCount)

        def func(count):
            weight = round(minWeight + (factor * (count - minCount)))
            return weight

        return func

    weight_func = get_weight_func(1, 3)
    tagList = []
    for tag in qsTag:
        weight = weight_func(tag.count)
        tagList.append({
            'name': tag.name,
            'count': tag.count,
            'weight': weight,
        })

    return tagList
# from keybert import KeyBERT

# def to_hashtag_list(content):
#     class FindKey:
#         def __init__(self,doc):
#             self.doc = doc

#         def textkey(self,i,j):
#             """
#             띄어쓰기 기준 (예: 1,2의 출력: 접근하지 남중국해)
#             i : 최소추출
#             j : 최대추출
#             """
#             model = KeyBERT('distilbert-base-nli-mean-tokens')
#             keywords = model.extract_keywords(self.doc,keyphrase_ngram_range=(i,j),stop_words=None)
#             return keywords

#     hashlist=[]
#     for i in FindKey(content).textkey(1,1):
#         hashlist.append(i[0])
#     return hashlist
# #print(FindKey("안녕하세요 저는 따뜻한 아이스크림입니다.").textkey(1,2)[0][0])

import requests
def connect_model(imageId, doc):
    # url = server_url.url
    url = 'http://116.38.220.14/resultAPI' # 고정
    data = {
        "doc":doc # 문자열 1줄로 요청
        ,"imageId": imageId # 이미지 url 뒤에 붙는 숫자값
        ,"modelId":"3"
            }
    result = requests.post(url, json=data)
    if result.ok:
        print(result.text)
        return 0
    #return JsonResponse(data=postList, safe=False, status=200)
    else:
        print("Model Server error")
        print("doc",doc)
        print('imgid',imageId)
        return -1