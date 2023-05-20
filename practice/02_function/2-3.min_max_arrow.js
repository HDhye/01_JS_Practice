/* 
2-3. min, max function 화살표 함수

2-1에서 함수 선언문으로 작성한 min, max 함수를 화살표 함수로 변경하여 생성 후 변수 초기화 숫자를
변경하며 최소값과 최대값을 함수 호출을 통해 리턴 받아 콘솔에 출력하는 테스트를 한다.
삼항 연산자를 이용하면 하나의 구문으로 변경할 수 있다.

*/
const a = 10;
const b = 20;

let min = () => {return a > b ? b : a};
let max = () => {return a < b ? b : a};

console.log(`최소값 : ${min(a, b)}`);
console.log(`최대값 : ${max(a, b)}`);