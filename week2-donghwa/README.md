1. querySelector와 getElementById 비교
querySelector는 다양한 CSS 선택자를 사용할 수 있어 편리하다.
getElementById는 ID 기반 선택만 가능하지만, 속도는 더 빠르다.

ex)
const elementById = document.querySelector('#myId');
const elementByClass = document.querySelector('.myClass');
const elementByTag = document.querySelector('div');
const elementByAttribute = document.querySelector('[data-test="example"]');
const child = document.querySelector('#parentId .childClass');

위의 querySelector는 getElement--(Id,ClassName,TagName,Name) 으로 각각 같은 기능을 수행한다.

ex)
document.getElementById('myId');
document.querySelector('#myId');
- 둘은 같은 기능을 수행


2. addEventListener와 classList
addEventListener와 classList 를 통해 HTML 요소에 여러 이벤트와 css요소를 추가할 수 있다.
ex)
element.addEventListener("click", function() {
  console.log("클릭 이벤트 실행!");
});
const element = document.querySelector("#myElement");
element.classList.add("newClass");


3. localStorage
브라우저에 데이터를 영구적으로 저장할 수 있는 공간
주요 메소드(setItem,getItem,removeItem,clear)

ex)
localStorage.setItem("username", "John");
const userName = localStorage.getItem("username");
localStorage.removeItem("username");
localStorage.clear();