## 이 리포지터리는 하루자국의 웹배포판입니다. 
- 멀티캠퍼스 주관 1개월 파이널 팀 프로젝트 '하루자국' 입니다.
- 모델 AI 서버는 https://github.com/CHAHANS/Haru_mlServer 리포지터리에 있습니다. 
# 기본 구성

1. backend (django)

- backend는 웹 데이터를 제공해주는 서비스 서버 입니다.

2. frontend (vue)

- frontend는 웹 데이터를 받는 Client 서버 입니다.

## 화면 구성



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

- 오류

  vue가 path에 등록되지 않아 vue를 인식 못함.

- 해결
  1. vue 설치되었는지 찾기 : `sudo find / -name vue`
  2. `/home/user/.yarn/bin/vue` 가 잘 설치 되었는지 확인
  3. bashrc로 이동 : `code ~/.bashrc`
  4. bashrc에 path 추가 : `export PATH="/home/user/.yarn/bin/:$PATH”` 추가
