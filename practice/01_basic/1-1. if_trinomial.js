/* 
1-1. if문/삼항연산자

변수 grade의 값이 
"손님"인 경우 "글 읽기", 
"일반 회원"인 경우 "글 읽기, 글 쓰기", 
"운영자"인 경우 "글읽기, 글 쓰기, 글 삭제" 
라는 값을 변수에 저장하여 아래와 같이 콘솔로 출력한다.

Ex. 운영자의 경우 글 읽기, 글 쓰기, 글 삭제가 가능합니다.
*/

// if문 

const author1 = '글 읽기';
const author2 = '글 쓰기';
const author3 = '글 삭제';

function authority(grade){
    if(grade === '손님') return `${author1}`;
    if(grade === '일반 회원') return `${author1}, ${author2}`; 
    if(grade === '운영자') return `${author1}, ${author2}, ${author3}`;
};
var grade = '손님';
// var grade = '일반회원';
// var grade = '운영자';
console.log(`${grade}의 경우 ${authority(grade)}가 가능합니다.`);

// 삼항연산자
let authority2 = (grade === '손님') ? '글 읽기' : ( (grade === '일반 회원') ? '글 읽기, 글 쓰기' : '글 읽기, 글 쓰기, 글 삭제');
console.log(`${grade}의 경우 ${authority2}가 가능합니다.`);







