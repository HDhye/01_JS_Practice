
    function answer01(){
        let $input = document.getElementById('q01');
        alert(Number($input.value) + 10);
    };

    function answer02(){
        let $input = document.getElementById('inputVal');
        let $pre = document.getElementById('numberArr'); 
        // pre의 텍스트요소를 공백기준으로 나눠 배열에 입력숫자가 존재하는지 조건문 추가
        if($pre.textContent.split(" ").includes($input.value)){ 
            console.log(`${$input.value}`);
        } else console.log("해당 숫자는 존재하지 않습니다.");
    };

    function answer03(){
        // 3개의 라디오박스를 한번에 가져온다.
        let $radio = document.querySelectorAll('input[type=radio]');
        /* 배열로 만들어준 후 filter메소드를 통해 radio박스가 체크 상태인(==ture) input요소를 반환시킨다. 
        filter 메소드는 새로운 배열을 만드므로 value값을 가져오기 위해서는 인덱스 0을 설정해줘야 한다.  
        */
        switch ([...$radio].filter(item => item.checked)[0].value) {
            case "naver":
                location.href = "https://www.naver.com";
                break;
            case 'google':
                location.href = "https://www.google.com";  
                break;
            case 'w3schools':
                location.href = "https://www.w3schools.com";
                break;
        };
        
    };

    function answer04() {
        let $input = document.querySelectorAll('input[type=checkbox]');
        $input[0].checked = true;  // 첫번째 항목의 체크박스 체크하기 
    };

    function answer05(){
        let $input = document.getElementById('randomVAl');
        $input.value = Math.ceil(Math.random()*45); 
    };

    function answer06(){

        let $select = document.getElementById('selOption');
        // 선택된(selected == true) 요소가 배열로 반환됨  
        let bool = [...$select.childNodes].filter(option => option.selected); 
        
        switch (bool[0].value) {
            case 'naver':
                window.open("https://www.naver.com", 'naver');        
                break;
            case 'google':
                window.open("https://www.google.com", 'google');     
                break;            
            case 'w3schools':
                window.open("https://www.w3schools.com", 'w3schools');     
                break;
        
        }
    };

    function answer07(){

        let $numList = document.getElementById('numList');
        alert(`${$numList.textContent.split(",").sort()}`);
        // , 기준으로 잘라서 정렬하기
    };

    function answer08(){
        let $date = document.getElementById('inputDate');
        // 입력된 날짜를 Date클래스로 생성하여 object가 아닌 number타입으로 전환해준다. 
        let day = new Date($date.value);
        // 지정한 날짜를 getter메소드를 통해 숫자타입으로 구해와 +3을 해주고, setter 메소드를 통해 값을 변경한다. 
        day.setDate(day.getDate() + 3);
        // getDay() 메소드를 통해 반환되는 숫자에 따라 요일을 구한다. (0: 일요일 ~ 7: 토요일 순이다.)
        switch (day.getDay()) {
            case 0:
                alert('일요일');
                break;
            case 1:
                alert('월요일');
                break;
            case 2:
                alert('화요일');
                break;
            case 3:
                alert('수요일');
                break;
            case 4:
                alert('목요일');
                break;
            case 5:
                alert('금요일');
                break;
            case 6:
                alert('토요일');
                break;
        }
    };

    function answer09(){
        // 입력한 dan의 value값 취득 
        let dan = document.getElementById('dan').value;
        // 출력결과값을 담을 변수 생성 
        let result = "";
        for (let i = 1; i < 10; i++) {
            result += dan + '*' + i + '=' + (dan*i) + '\n';  
        }
        alert(result);
    };

    function answer10(){
        // 입력한 name의 value값 취득 
        let name = document.getElementById('inputName').value;
        // span요소의 html요소 취득 
        let add = document.getElementById('addVal').innerHTML; 

        alert(name + add);
    };