
/* 
1-2. switch문

아래 if문으로 작성 된 script를 switch문으로 변환한다.

*/
var browser = 'Edge'; // 'Chrome', 'Firefox' 등으로 변경해서 테스트

if (browser == 'Edge') {
console.log("Edge를 사용하고 계시네요!");
} else if (browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
} else {
console.log('현재 페이지가 괜찮아 보이길 바랍니다!');
}

console.log('==================== switch ===========================');
// if문으로 작성 된 script를 switch문으로 변환한다.

switch(browser){
    case 'Edge' : console.log('Edge를 사용하고 계시네요!'); break; 
    case 'Chrome' || 'Firefox' || 'Safari' || 'Opera' : console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.'); break;
    default : console.log('현재 페이지가 괜찮아 보이길 바랍니다!'); break; 
};