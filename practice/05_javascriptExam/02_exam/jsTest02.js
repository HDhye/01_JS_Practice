function answer01(){
    let $input = document.getElementById('q01_num');
    if(/^\d+$/.test($input.value)){  // 정규표현식 숫자로만 이루어졌는지 검증 
        alert('숫자입니다.');
    } else { 
        alert('숫자가 아닙니다.');
    };
};

function answer02(){
    const name = document.querySelectorAll('input[type=text]')[1].value;  
    /* 해당 document안에 input이 많아 타입으로 취득하게 되면 첫 요소만(문제1번)의 요소만 들어오게 된다.
        그렇기 때문에 우선 모든 요소를 selectAll로 취득하고 해당 문제는 인덱스 1번의 input요소이므로 인덱스 1번으로 찾아준다.
    */ 
    const nameList = document.querySelector('#nameList').innerHTML; 
   // 공백과 미입력은 인식되지 않게 공백기준으로 나눠 배열을 새로 만들어준다.  
    if(nameList.split(" ").includes(name)){
        alert(`${name}가 존재합니다.`); 
    } else {
        alert('해당 이름이 존재하지 않습니다.')
    }
};

function answer03(){
    const radio = document.getElementsByName('rdo');
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked){
            window.open('http://www.' + radio[i].value + '.com' );
        };
    }
    
};
function answer04(ch){
    const checkbox = document.querySelectorAll('input[type=checkbox]');
    if(ch){
        [...checkbox].forEach(item => item.checked = true);
    } else {
        [...checkbox].forEach(item => item.checked = false);
    }
};
function answer05(){
    let randomNum = document.getElementById('randomInput');
    randomNum.value = Math.floor(Math.random()*20) + 1;
    
};
function answer06(){
    let location = document.getElementById('locationSelect');
    for (let i = 0; i < location.length; i++) {
        if(location[i].selected){
            window.open('http://www.' + location[i].value + '.com' );
        };
    };
    
};
function answer07(){
    let numVal = document.getElementById('numVal').innerHTML;
    alert(`${numVal.split(",").sort((a, b) => a - b )}`);
};
function answer08(){
    let start = document.getElementById('startDate').value;
    const today = new Date();
    let startDay = new Date(start);
    alert(Math.floor((today.getTime() - startDay.getTime())/24/60/60/1000));
};
function answer09(){
    const form = document.forms[0];
    let input = [form.name.value, form.age.value, form.gender.value];
    let table = document.getElementById("createTable");

    let tr = document.createElement('tr');
    for (let i = 0; i < input.length; i++) {
        let td = document.createElement('td');
        td.textContent = input[0]; 
        tr.appendChild(td);
    }
    table.appendChild(tr);

};
function answer10(){

    let dan = document.getElementById('gugudan').value;
    let result = ""; 
    for (let i = 1; i < 10; i++) {
            result += dan + '*' + i + '=' + dan*i+'\n';
    }; 
    alert(result);

    
};