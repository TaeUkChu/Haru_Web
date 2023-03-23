from keybert import KeyBERT

def to_hashtag_list(content):
    class FindKey:
        def __init__(self,doc):
            self.doc = doc

        def textkey(self,i,j):
            """
            띄어쓰기 기준 (예: 1,2의 출력: 접근하지 남중국해)
            i : 최소추출
            j : 최대추출
            """
            model = KeyBERT('distilbert-base-nli-mean-tokens')
            keywords = model.extract_keywords(self.doc,keyphrase_ngram_range=(i,j),stop_words=None)
            return keywords

    hashlist=[]
    for i in FindKey(content).textkey(1,1):
        hashlist.append(i[0])

    return hashlist
print(type(to_hashtag_list("안녕하세요 전 따듯한 아이스크림입니다")))