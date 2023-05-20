/*
3-2. 객체 생성자로 계산기 객체 만들기

Calculator라는 생성자 함수에 아래와 같은 메소드를 정의하고 해당 생성자를 통해 객체를 만들어 
메소드 실행을 테스트 한다.
sum 메소드 : 저장된 두 값의 합을 반환
multi 메소드 : 저장된 두 값의 곱을 반환

console
합 : 30
곱 : 200
*/

function Calculator() {
    this.a = 10;
    this.b = 20;
    this.sum = function(){
        return this.a + this.b; 
    };
    this.multi = function(){
        return this.a * this.b;
    };
};
const calculator = new Calculator();

console.log(`합 : ${calculator.sum()}`);
console.log(`곱 : ${calculator.multi()}`);
