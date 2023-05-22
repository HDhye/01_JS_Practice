/* 
4-2. 배열(arr)의 요소 중 a와 b 사이에 속하지 않는 요소는
삭제해주는 함수 filterRange(arr, a, b)를 작성한다.
힌트 : splice



*/

function filterRange(arr, a, b) {
    if(a > b){      // 전달인자 순서 상관없이 하기 위해 작성
        let tmp = 0; 
        tmp = a;
        a = b; 
        b = tmp; 
    }; 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--; 
        };        
    };
};

const arr = [5, 3, 8, 1, 10, 4];
filterRange(arr, 8, 3);
console.log(arr)

