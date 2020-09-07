클로저 Closures

---

> 현재 서브루틴의 스코프가 끝났지만 내부에서 참조하고 있는 함수가 외부에 호출 되었을 때 사라지지 않고 사용된다.

---

```javascript
var color = 'red';
function foo(){
    var color = 'blue';
    function bar(){
        console.log(color;
    }
    return bar;
}

var baz = foo();
baz();
```

1. bar는 color를 찾아 출력하는 함수로 정의되었다.
2. 그리고 bar는 outer environment 참조로 foo의 environment를 저장하였다.
3. bar를 global의 baz란 이름으로 데려왔다.
4. global에서 baz(=bar)를 호출했다.
5. bar는 자신의 스코프에서 color를 찾는다.
6. 없다 자신의 outer environment 참조를 찾아간다.
7. outer environment인 foo의 스코프를 뒤진다. color를 찾았다. 값은 'blue'이다.
8. 때문에 당연히 blue가 출력된다.

정리하자면 bar는 자신이 생성된 렉시컬 스코프에서 벗어나 global에서 baz라는 이름으로 호출이 되었고, 스코프 탐색은 현재 실행 스택과 관련 없는 foo를 거쳐 갔다.
baz를 bar로 초기화할 때는 이미 bar의 outer lexical environment를 foo로 결정한 이후이다. 때문에, bar의 생성과 직접적인 관련이 없는 global에서 아무리 호출하더라도 여전히 foo에서 color를 찾는 것이다. 이런 bar(또는 baz)와 같은 함수를 클로저라고 부른다.

> JS에서 렉시컬 스코프는 변수가 어디에 선언하였는지에 따라 결정된다.(어디서 호출이 아님)

## 클로저의 쓰임

클로저는 어떤 경우에 사용 되어지나?

1. 사이드 이펙트(side effects) 제어하기
2. private 변수 생성하기

일단 사이드 이펙트(Side Effect)를 설명하자면 사전적 의미로 '원래의 목적과 다르게 다른 효과 또는 부작용'이라는 상태를 말하는 표현입니다.
자바스크립트 관점에서 보면 자바스크립트 코드의 흐름을 방해하는 비동기적 로직인 ajax, timeout등이 있으며 클로저로 원하는 시점에 언제든지 반환될 함수를 호출 하여 사이드 이펙트를 제어 합니다.

함수 내의 변수는 함수 바깥에서 접근 할 수 없습니다. 그 변수들을 private 변수라고 부릅니다.
하지만 종종 해당 변수들을 접근 해야 할 필요가 발생 할때 클로저를 활용해서 접근 할수 있습니다.

---

## 참조

[https://medium.com/@khwsc1](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19)

[https://meetup.toast.com/posts/118](https://meetup.toast.com/posts/118)
