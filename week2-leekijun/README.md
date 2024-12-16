querySelector();
querySelector는 getElementById에 비해 다양한 장점을 제공하며, 특히 편의성과 융통성 측면에서 뛰어남

const element = document.getElementById('myId');

getElementById와 다르게 querySelector는 다양한 CSS 선택자를 사용할 수 있습니다.

const elementById = document.querySelector('#myId');
const elementByClass = document.querySelector('.myClass');
const elementByTag = document.querySelector('div');
const elementByAttribute = document.querySelector('[data-test="example"]');

한 번의 호출로 중첩 요소를 선택할 수 있습니다.
const child = document.querySelector('#parentId .childClass');

getElementById//가 속도는 빠름.







querySelector 메서드 하나로 getElementsByName, getElementsByTagName, getElementsByClassName, getElementById가 할 수 있는 모든 선택 작업을 수행할 수 있음
사용예)
getElementById('myId')
querySelector('#myId')

getElementsByClassName('myClass')
querySelectorAll('.myClass')

getElementsByTagName('div')
querySelectorAll('div')

getElementsByName('myName')
querySelectorAll('[name="myName"]')








////////////////////////////////////////////

if (조건식 === 비교값) {
  // === 연산자는 엄격한 비교를 수행 (데이터 타입과 값)
}


element.addEventListener(event, function, useCapture);
하나의 요소에 여러 이벤트를 추가 할수 있음 click, submit, mouseover, keydown ...











localStorage

특징:
데이터는 만료 날짜 없이 저장됩니다.
브라우저를 닫아도 데이터가 유지됩니다.
문자열 형태로만 데이터를 저장할 수 있습니다.
주요 메서드:
setItem(key, value): 데이터 저장
getItem(key): 데이터 조회
removeItem(key): 특정 데이터 삭제
clear(): 모든 데이터 삭제

간단한 데이터 저장에 유용, 보안에 민감한 정보는 저장하지 않는 것이 좋음.




