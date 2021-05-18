# ProductItem 컴포넌트 사용법

## props는 list, link

### 1. list 는 프로덕트 리스트 데이터 사용

- 현재는 /data/categoryData.json 의 목데이터를 사용중, 아래는 예시 코드

```js
  componentDidMount() {
    fetch('/data/categoryData.json')
      .then(result => result.json())
      .then(categoryData => {
        this.setState({ productList: categoryData.productList });
      });
  }

  ...

  {productList.map((list) => {
    <ProductItem list={list}>
  })}
```

### 2. link 는 이미지 누르면 갈 주소

- 예를 들면 아래와 같이 하면 / 주소로 간다.

```js
<ProductItem link='/'>
```
