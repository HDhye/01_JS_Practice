/* 
3-1. 객체 리터럴로 계산기 객체 만들기
calculator 라는 객체에 아래와 같은 메소드를 정의하고 메소드 실행을 테스트 한다.
sum 메소드 : 객체의 a, b 두 값의 합을 반환
multi 메소드 : 객체의 a, b 두 값의 곱을 반환

[console]
합 : 30
곱 : 200
*/

const calculator = {
    a : 10,
    b : 20,
    sum (){return this.a + this.b}, 
    multi(){return this.a * this.b}, 
};

console.log(`합 : ${calculator.sum()}`);
console.log(`곱 : ${calculator.multi()}`);