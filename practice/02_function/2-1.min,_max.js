/* 
2-1. min, max function

전달 된 매개변수 중 최소값을 반환하는 함수 min(a, b)과 전달 된 매개변수 중 최대값을 반환하는 함수
max(a, b)를 정의하고
변수 초기화 숫자를 변경하며 최소값과 최대값을 함수 호출을 통해 리턴 받아 콘솔에 출력하는 테스트를
한다.

최소값 : 10
최대값 : 20
*/
const num1 = 10;
const num2 = 20;

function min(a, b){
    return a > b ? b : a;
};
function max(a, b){
    return a < b ? b : a;
};

console.log(`최소값 : ${min(num1, num2)}`);
console.log(`최대값 : ${max(num1, num2)}`);