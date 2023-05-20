/* 
2-2. pow function

x의 n제곱을 반환해주는 함수 pow(x, n)를 정의하고 변수 초기화 숫자를 변경하며 
함수 호출하여 콘솔로 리턴 받은 결과 값을 출력한다.

x의 n 제곱은 x를 n번 곱해서 만들 수 있다.
주의사항 : n은 1 이상의 자연수여야 하므로 이외의 경우엔 자연수를 입력하라는 문구를 콘솔로 출
력한다.

[console]
1024
또는
-1은 양의 정수이어야 합니다.
*/

const x = 2;
// const n = 10;
const n = -1;
// 코드 작성
// 함수 정의 
function pow(x, n){
    if(n < 1) console.log(`${n}은 양의 정수이어야 합니다.`);
    else x**n;
};
console.log(pow(x, n));

// math메소드 사용
// console.log(Math.pow(x, n));