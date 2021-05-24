# Kokoa Friends Mart

[카카오 프렌즈 골프](https://www.kakaofriendsgolf.com) 클론 프로젝트

## 🖥 프로젝트 요약

- 프로젝트 진행 기간: 2주일 (2021.05.10 ~ 2021.05.21)
- 카카오VX의 골프 용품 전문 [KAKAO FRIENDS GOLF](https://www.kakaofriendsgolf.com)을 프론트엔드(React.js), 백엔드(Django)를 기반으로 클론하는 프로젝트
- 클론 타겟 사이트의 구성과 틀은 가져오되, 카테고리를 Mart로 피보팅했으며 사용하는 캐릭터와 상품 내용은 직접 제작해 구성

### 프로젝트 팀 구성

#### 프론트엔드

- [박준모](https://github.com/junmopark01)
- [이지연](https://github.com/Yonyas)
- [조원영](https://github.com/wychrischo)
- [하연주](https://github.com/yyeonjju)

#### 백엔드

- [전현수](https://github.com/jeonhs2482)
- [최준식](https://github.com/JunsikChoi)

---

## 🖥 프로젝트 상세 내용

### 👩🏻‍💻 [프론트엔드](https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsMart-frontend)

#### **OverView**

#### 개발 환경

#### 실행 방법

#### 페이지별 기능 DEMO

##### 회원가입 / 로그인 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/Signup&Login.gif?raw=true'/>

##### 메인 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/MainPage.gif?raw=true'/>

##### 카테고리 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/CategoryPage.gif?raw=true'/>

##### 제품 상세 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/DetailPage.gif?raw=true'/>

##### 제품 상세 페이지 -> 주문하기 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/DetailPage_to_PaymentPage.gif?raw=true'/>

##### 장바구니 페이지 -> 주문하기 페이지

<img alt="Signup & Login Page" src='https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend/blob/main/demo/CartPage_to_PaymentPage.gif?raw=true'/>

#### **팀원 별 구현 내역**

##### 박준모

`Login & Singup`:

- JWT과 LOCALSTORAGE를 이용하여 로그인 기능 구현

`Main & payment`:

- Vanilla js를 이용한 무한루프 슬라이더 구현
- fecth를 이용해 백엔드와 통신하여 주문상품 데이터 렌더링

##### 이지연

`Main`:

- Best item 레이아웃 구현

`Category`:

- 카테고리페이지 레이아웃 구현
- 카테고리페이지 페이지네이션
- 최신순, 인기순, 가격순 필터 기능
- 동적라우팅을 이용한 상품 클릭시 상세페이지로 이동 기능

##### 조원영

`Main`:

- Nav : 네브바 레이아웃 및 카테고리 & 캐릭터별 동적라우팅 그리고 서치기능
- MD's Pick and Like Pick: 상품별 필터 기능

##### 하연주

`Product Details` :

- 페이지 레이아웃.
- 상세 페이지를 <ProductDetail />, <ProductOption />, <ProductReview /> - 부분으로 나우어 컴포넌트화.
- 수량 변경 버튼과 상품 수량에 따른 가격 변동 구현.
- 버튼 클릭 시 페이지 펼쳐보기 기능 구현.
- 리뷰 별점, 평균 별점 데이터 렌더 기능 구현.
- 장바구니 담기: fetch() post를 이용해 장바구니 페이지로 데이터 전달.
- 즉시 구매하기: fetch() post를 이용해 구매 페이지로 데이터 전달.

`Cart` :

- 페이지 레이아웃.
- 제품별 삭제, 전체 삭제 기능 구현.
- 개별 상품 수량 증감 버튼 기능 구현.
- 상품 삭제, 수량 증감에 따라 총 결제 금액 변동 구현
- 특정 조건(~원 이상시)달성 시 무료배송 조건 구현

### 👩🏻‍💻 [백엔드](https://github.com/wecode-bootcamp-korea/20-1st-KokoaFriendsGolf-backend)

#### **OverView**

#### 개발 환경

- Python 3.8
- Django
- MySQL

#### 실행 방법

### 데이터베이스 셋업

```mysql
# MySQL DB 생성
create database KokoaFriendsGolf character set utf8mb4 collate utf8mb4_general_ci;
```

### 파이썬 환경 세팅 및 서버 실행

```shell
# 시드 데이터 다운로드
mkdir -p ./data && cd ./data && curl -LJO --url https://gist.githubusercontent.com/JunsikChoi/d9b12949b7007b9d8a2bd958e0a8f0e7/raw/95e05009cd38033d2fe4e5583488469733861694/mockup_data.py && cd ..

# 파이썬 라이브러리 설치
pip install -r requirements.txt

# DB 모델 마이그레이션
python manage.py makemigrations
python manage.py migrate

# 가상 유저 정보 및 제품 정보 생성
python manage.py generate_user_data
python manage.py generate_product_data
python manage.py populate_user_db
python manage.py populate_product_db

# 서버 실행
python manage.py runserver 0.0.0.0:8000
```

#### 구현된 API 설명

[KokoaFriendsMart API Documentation](https://documenter.getpostman.com/view/13584119/TzRShToH)

##### Users API

**`POST /users/signup`**

- Request JSON 포맷

  - email: 유저 이메일 (@, . 포함해야 함.), 중복 불가
  - password: 유저 패스워드, 암호화된 해시값으로 저장, 8자 이상 (e.g.: "1234abcd")
  - phone_number: 유저 핸드폰번호, 중복 불가 (e.g "01012341234")
  - name: 유저 이름 (e.g. "김코코")
    옵션키
  - birthday: 유저 생년월일 (e.g. "1995-06-01")
  - gender: 유저 성별 ('M' 또는 'F' 또는 입력값 없을 시 보내지 않으면 'N'으로 기록됨)

- Response 타입
  - `"status": "SUCCESS"` : 회원가입 성공
  - `"status": "JSON_DECODE_ERROR"` : 잘못된 JSON 형식 입력
  - `"status": "KEY_ERROR"` : 키 이름 잘못 입력
  - `"status": "DUPLICATED_ENTRY"` : 중복된 이메일 / 핸드폰 번호
  - `"status": "INVALID_DATA_ERROR"` : 유효하지 않은 이메일 형식

**`POST /users/signin`**

- Request JSON 포맷

  - email: 가입한 유저 이메일
  - password: 가입시 입력한 유저 패스워드

- Response 타입
  - `"status": "SUCCESS"` : 로그인 성공 / JWT 토큰 반환됨
  - `"status": "JSON_DECODE_ERROR"` : 잘못된 JSON 형식 입력
  - `"status": "KEY_ERROR"` : 키 이름 잘못 입력
  - `"status": "INVALID_USER_ERROR"` : 존재하지 않는 유저 또는 틀린 비밀번호 입력

##### Products API

**`GET /products?cname=<category_or_character_name>&orderBy=<order_by>&offset=<offset>&limit=<limit>`**

- Request JSON 포맷

  - /products?<쿼리파라미터>=<쿼리값>으로 접근
  - 쿼리 주어지지 않을 시 디폴트로 모든 프로덕트를 최신순으로 정렬하여 16개씩 페이지네이션 적용하여 보여준다.

- Query Params

  - CNAME (한글)
    - 카테고리 이름
    - 서브카테고리 이름
    - 캐릭터 이름
  - ORDERBY
    - RECENT : 최신순으로 정렬
    - -RECENT : 오래된 순으로 정렬
    - PRICE : 가격 높은 순으로 정렬
    - -PRICE : 가격 낮은 순으로 정렬
    - LIKE : 좋아요 많은 순으로 정렬
    - -LIKE : 좋아요 적은 순으로 정렬
  - LIMIT & OFFSET
    - limit : 가져올 상품의 갯수
    - offset: 가져올 상품 목록의 시작지점
    - limit + offset이 전체 제품 수보다 크거나 같을 경우 is_last_page: True
      아직 가져올 제품이 더 남아있을 경우 is_last_page: False

- Response 포맷

  - `response = { 'status' : , 'data': { "product_list": [ {}, {}, {}, {}, ... ], "is_last_page": }`

- RESPONSE 예시
  - 잘 입력한 경우
    - 200 SUCCESS
      - 상품 조회 성공시 data에 product info list 담겨옵니다.
  - 잘못된 쿼리 파라미터가 들어올 경우 (e.g. /products?abd=123)
    - 200 SUCCESS
      - 디폴트 값으로 전체 상품 리스트가 돌아옵니다.
  - 쿼리 파라미터는 맞았지만 값이 올바르지 않은 경우 (e.g. /products?cname=개똥이)
    - 200 SUCCESS
      - 빈 리스트의 상품 리스트가 돌아옵니다.
  - 페이지네이션 적용한 경우 (e.g. /products?offset=10&limit=50)
    - 200 SUCCESS
      - 필터링 된 상품의 10번째 부터 50개를 가져옵니다.

**`GET /products/<product_id>`**

- REQUEST 포맷

  - /products/<product_ID>

- RESPONSE 포맷 (타입 | 의미)

  - 전체 Response 구조 : `response = { 'status' : , 'message' : , 'data': { 'product': {} } }`

- product 데이터키

  - "id" : 정수형 | 상품 ID (DB상 상품 ID)
  - "name" : 문자열 | 상품 이름
  - "price" : 실수형 | 상품 가격 (KRW)
  - "thumbnail_url" : 문자열 | 썸네일 URL
  - "is_new" : 참거짓 | 신상 여부 (True/False)
  - "is_sale" : 참거짓 | 신상 여부 (True/False)
  - "is_soldout" : 참거짓 | 신상 여부 (True/False)
  - "is_set" : 참거짓 | 신상 여부 (True/False)
  - "is_picked" : 참거짓 | 신상 여부 (True/False)
  - "counts_liked" : 정수형 | 해당 제품이 받은 like 개수
  - "contents" : 문자열 | 상품 상세정보 HTML
  - "subcategory" : 문자열 | 서브 카테고리 이름
  - "category" : 문자열 | 카테고리 이름
  - "character" : 문자열 | 캐릭터 이름
  - "discount_ratio" : 실수형 | 할인율 정보 (e.g. 15% 할인 -> 0.15)
  - "created_at" : 문자열 | 상품 생성된 시점 (e.g. '2021-05-15 21:38:18')
  - "updated_at" : 문자열 | 상품 정보 업데이트된 시점 (e.g. '2021-05-15 21:38:18')

- RESPONSE STATUS
  - 200 SUCCESS
    - 상품 조회 성공시
    - data에 product info 담겨옵니다.
  - 404 PRODUCT_NOT_FOUND
    - 상품 ID를 갖는 상품이 DB에서 발견되지 않는 경우
    - message에 에러메세지가 담겨 옵니다.

**`PATCH /products/<product_id>`**

- 기능
  - 유효한 토큰을 Authorization Header에 포함시켜 Patch 메서드를 콜하면 해당 유저의 해당 상품에 대한 좋아요 여부가 반전됩니다.

##### Orders API

**`GET /orders?orderType=<order_type>`**

- order_type = IN_CART | PURCHASE_CART | PURCHASE_INSTANT | PURCHASED
- 쿼리 파라미터에 들어가는 order_type에 따라 해당 상태에 있는 product 리스트를 반환

**`POST /orders?orderType=<order_type>`**

- order_type = IN_CART | PURCHASE_INSTANT
- 제품을 장바구니에 넣거나, 바로 구매 상태로 만들어 줄 수 있다.

**`PATCH /orders?orderType=<order_type>`**

- order_type = PURCHASE_CART | PURCHASED
- 장바구니에 있는 제품을 주문하기 상태로 넘기거나, 주문중인 상품을 구매 상태로 전이시킬 수 있다.

#### **팀원 별 구현 내역**

#### 전현수

- `DB 모델링`

  - 백엔드 팀원과 함께 Aquery tools 통해 필요한 관계형 DB 테이블 모델링

- `Products API`

  - Product List View 카테고리별 상품 분류 로직구현
  - Product List View 가격순, 최신순 등 상품 정렬 로직구현
  - Product List View 검색기능 로직구현
  - Product List View 페이지네이션 로직구현

- `Orders API`
  - OrderListView GET 메서드 구현

#### 최준식

- `Fake Data 생성 및 DB Population 기능`

  - Python Faker 라이브러리를 통한 가짜 목업 데이터 생성
  - 유저 및 제품 정보 생성 후 csv 파일로 저장 가능
  - 생성된 csv 파일을 읽어와 DB에 저장하며 유저 - 제품 간 좋아요 관계 랜덤 설정
  - Django 커스텀 커맨드로 등록하여 손쉽게 데이터 생성 및 적용 가능

- `DB 모델링`
  - 백엔드 팀원과 함께 Aquery tools 통해 필요한 관계형 DB 테이블 모델링
- `Users API`

  - SignUpView 로직 구현
  - SignInView 로직 구현

- `Products API`

  - Product Detail View 구현
  - Product List View PATCH 메서드 구현

- `Orders API`

  - OrderListView POST 메서드 구현
  - OrderListView PATCH 메서드 구현
  - OrderListView 기타 헬퍼 메서드 구현

- `Utils`

  - LoginRequired / CheckUsers 데코레이터 구현

- `AWS`
  - AWS Light Sails 이용한 Django Backend API 개발 서버 배포

## 🔧 사용된 기술 스택

- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
- ![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Python](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)
- ![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
- <img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>

## 🔧 사용된 툴

- <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" /> : API 문서화 및 설계
- <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/> : SCRUM 기반 개발을 위한 팀 협업 도구
- <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/> : 프로젝트 버젼 관리
- <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> : 프로젝트 버젼 관리
- <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" /> : 팀 내 의사소통
- <img alt="AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/> : 개발 서버 호스팅
- <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"/> : IDE

## ✏️ References

- 이 프로젝트는 카카오 프렌즈 골프를 참고하여 학습용으로 작업 되었습니다.
- 이 프로젝트에서 사용된 이미지는 배포 가능한 캐릭터와 상품 이미지를 목업 제작용 사이트 [PlaceIt](https://documenter.getpostman.com/view/13584119/TzRShToH)을 통해 제작되었습니다.
- 이 프로젝트에 쓰인 상품 정보 및 개인정보는 모두 파이썬 Faker 라이브러리를 통해 만들어진 허구의 것입니다.
- 이 프로젝트의 소스 코드는 상업적으로 이용하실 수 없습니다.
