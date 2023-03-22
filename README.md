# 기본 구성

1. backend (django)

- backend는 웹 데이터를 제공해주는 서비스 서버 입니다.

2. frontend (vue)

- frontend는 웹 데이터를 받는 Client 서버 입니다.

# 동작 원리

backend 서버가 상시 켜져있다는 가정 하에 frontend 서버에서 접근합니다.
frontend에서 backend서버에 요청을 하고 데이터를 받아옵니다.

# 사용방법

## 개발 환경

### vue 개발 환경

1. 노드(node.js)가 다운 되어있어야합니다.

- 노드 다운 방법은 다음과 같습니다 (WSL 기준)

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
# 커널 재시
sudo apt-get install yarn
yarn --version
node -v
yarn global add @vue/cli
npm install axios
npm i filemanager-webpack-plugin-fixed
```

2. 잘 깔렸는지 확인해줍니다.

- npm --version
- node --version

### django 개발환경

- 가상환경으로 가정합니다.

1. pip install django
2. pip install django-taggit
3. pip install keybert

#### 실행 방법

- 기본적으로 두 개의 터미널을 사용합니다
- 터미널 1 은 개발 서버, 즉 웹 페이지를 개발할 때 사용하는 페이지입니다.
- 터미널 2 는 실 사용서버입니다.
- 터미널 1에서 npm run build를 수행한 후 터미널 2에서 python manage.py runserver로 실행합니다.

##### 터미널 1

1. cd frontend
2. npm run build
3. npm run serve

##### 터미널 2

1. cd backend
2. conda activate 가상환경
3. python manage.py migrate
4. python manage.py makemigrations
5. python manage.py runserver
