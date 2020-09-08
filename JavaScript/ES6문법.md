ES6 문법

---

- const & let 변수 선언방식
- 화살표 함수
- 향상된 객체 리터럴
- 펼침 연산자
- 템플릿 리터럴
- 구조 분해 문법
- 모듈

[https://joshua1988.github.io/es6-online-book/const-let.html#let](https://joshua1988.github.io/es6-online-book/const-let.html#let)

---

## const & let

let 키워드는 재 선언 불가능, 재 할당 가능
const 키워드는 재 할당 불가능 하지만 객체{} 또는 배열[] 로 선언 했을시 객체의 속성(property)과 배열의 요소(element)는 변경 할수 있습니다.

ES5의 var 예약어를 이용한 변수 선언 방식과 let & const를 이용한 변수 선언 방식의 가장 큰 차이점은 블록 유효범위 이다.

var의 유효범위는 함수의 블록 단위로 제한되며 함수 스코프라고 표현 합니다.
let & const의 유효범위는 {} 블록으로 제한되며 블록 스코프라고 표현 합니다.

```javascript
//var 유효범위 함수 스코프

var a = 10;
for (var a = 0; a < 5; a++) {
  console.log(a); // 0 1 2 3 4 5
}
console.log(a); // 6

//let 유효범위 블록 스코프
var b = 10;
for (let b = 0; b < 5; b++) {
  console.log(b); // 0 1 2 3 4 5
}
console.log(b); // 10
```

---

## 화살표함수 Arrow Function

화살표 함수는 function 키워드 대신 화살표()=>)를 사용하여 보다 간결한 방법으로 함수를 선언할수 있다.

```javascript
//화살표 함수 기본 문법
() => {...}
x => {...} // 매개변수 한개일 경우 소괄호 생략 가능
(x, y) => {...}
x = > {return x * x}
x => x * x  //함수 몸체가 한줄의 구문이면 중괄호 생략 가능
() => {reurn {a:1};}
() => ({a : 1}) //위 표현과 동일하다. 객체 반환시 소괄호 사용
() => {
    const x = 10;
    return x * x;
};
```

#### 화살표 함수는 익명 함수로만 사용가능 하며, 콜백 함수로 사용 할수 있다.

```javascript
const pow1 = (x) => x * x;

const arr = [1, 2, 3];
const pow2 = arr.map((x) => x * x);
```

#### this 차이

자바스크립트의 내부함수는 일반 함수, 메소드, 콜백 함수 어디서 선언되었든지 this는 전역객체를 가르키며 일반함수의 this는 window이다.
화살표 함수의 this는 언제나 상위 스코프의 this를 가르킨다.

---

## 향상된객체 리터럴 Enhanced Object Literal

향상된 객체 리터럴이란 기존 자바스크립트에서 사용하던 객체 정의 방식을 개선한 문법입니다.

```javascript
// 기존의 객체 정의 방식
var josh = {
  //속성: 값
  language: "javascript",
  conding: function () {
    console.og("Hello world");
  },
};

//축약 문법 1 - 속성과 값이 같으면 축약 가능
var language = "javascript";
var josh = {
  //language: language,
  language,
};
console.log(josh); //{ language: "javascript}

//축약 문법을 뷰 컴포넌트 등록 방식과 뷰 라우터 등록 방식에 대입해보면
// #1 컴포넌트 등록 방식에서의 축약 문법
const myComponent = {
  template: "<p>My Component</p>",
};

new Vue({
  components: {
    //myComponent: myComponent
    myComponent,
  },
});

//#2 라우터 등록 방식에서의 축약 문법
const router = new VueRouter({
  //...
});

new Vue({
  //router: router,
  router,
});

//축약 문법2 - 속성에 함수르 정의할 때 function에약어 생략
//기존의 객체 속성에 함수를 연결할여 사용하는 경우
const josh = {
  //속성: 함수
  conding: function () {
    console.log("Hello World");
  },
};
josh.conding(); //Hello World

//축약
const josh = {
  conding() {
    console.log("Hellow World");
  },
};
josh.conding(); //Hello World

//뷰 코드에서도 마찬가지로 축약

new Vue({
  //..

  methods: {
    fetchData() {
      //...
    },
    showAlert() {
      //...
    },
  },
});
```

---

## 펼침 연산자 Spread Operator

스프레드 오퍼레이터는 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 떄 사용합니다. 연산자의 모양은 ... 이렇게 생겼습니다.

```javascript
//obj 객체를 newObj 객체에 복제
var obj = {
  a: 10,
  b: 20,
};

var newObj = { ...obj };
console.log(newObj); //{a:10, b:20}

//arr 배열을 newArr 배열에 복제
var arr = [1, 2, 3];
var newArr = [...arr];
console.log(newArr); //[1,2,3]
```

이렇게 스프레드 오퍼레이터를 사용하는 이유는 타이핑 해야 하는 코드의 양이 많이 줄기 때문입니다.

---

## 템플릿 리터럴 Template Literal

템플릿 리터럴이란 자바스크립트에서 문자열을 입력하는 빙식입니다.
ES6에서는 백틱(back-tick)이라는 기호(`)를 사용하여 정의합니다.

```javascript
// /n 이랑 + 와 같은 문자열을 개행 기호를 쓰지 않아도 됨
//문자열 중간에 변수 대입
const c = 'asdf';
const str = 'aaaaaaaaaaaa ${c} bbbbbbbbbbbbbbb`;
```

---

## 구조 분해 문법 Destructuring

디스트럭처링 이라고 하는 이 ES6문법은 한글로는 구조분해 문법입니다.
기존의 자바스크립트에서의 객채와 배열의 구조는 다음과 같지만 구조분해는 이러한 변수 선언 형식이 자유로워 지는 것을 말합니다.

```javascript
//기존의 선언방식
var arr = [1, 2, 4, 5];
var obj = {
  a: 10,
  b: 20,
  c: 30,
};

//구조 분해
var { a, b, c } = obj;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

---

## 모듈

Import & Export 는 자바스크립트의 코드를 모듈화 할 수 있는 기능입니다.
여기서 모듈화란 쉽게 말해서 다른 파일에 있는 자바스크립트의 기능을 특정 파일에서 사용할 수 있는 것을 의미합니다.

모듈화의 필요성
기본적으로 자바스크립트의 유효범위는 전역으로 시작합니다. 따라서 아래와 같이 HTML페이지를 로딩하면 원하는 결과가 나오지 않습니다.

```javascript
<body>
  <script src="a.js"></script>
  <script src="b.js"></script>
  <script>getTotal();//200</script>
</body>;

// a.js
var total = 100;
function getTotal() {
  return total;
}

// v.js
var total = 200;
```

자바스크립트에서는 기본적으로 변수의 유효범위가 전역으로 잡히기 때문에 네임스페이스 모듈와 패턴이나 Require.js 와 같은 모듈화 라이브러리를 이용하여 모듈화 기능을 구현해 왔습니다.
하지만 지금은 프로그래밍 패턴이나 별도의 모듈화 라이브러리를 사용하지 않고도 자바스크립트 언어 자체에서 모듈화를 지원합니다.

import & export 기본 문법

```javascript
export 변수, 함수
//다른 파일에서 가져다 쓸 변수나 함수의 앞에 export 라는 키워드를 붙입니다.
//익스포트된 파일은 임포트로 불러와 사용할 수 있습니다.

import { 불러올 변수 또는 함수 이름} from '파일 경로';
//익스포트된 변수나 함수를 {}에 선언한 뒤 해당 파일이 있는 경로를 적어줍니다.
```

import & export 기본 예제

```javascript
//math.js
export var pi = 3.14;
export function sum(a, b) {
  return a + b;
}

//app.js
import { pi, sum } from "./math.js";
console.log(pi); // 3.14
sum(10, 20); //30
```

하지만 import, export는 아직 브라우저에서 지원이 안될수 있어서 Webpack과 같은 모듈 번들러를 이용하여 사용해야 합니다.

---

## 참조

[https://poiemaweb.com/es6-arrow-function](https://poiemaweb.com/es6-arrow-function)
