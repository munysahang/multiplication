var 조건1 = true;
while(조건1){
  var 숫자1 = Math.floor(Math.random()*9)+1
  var 숫자2 = Math.floor(Math.random()*9)+1
  var 결과 = 숫자1*숫자2
  var 조건2 = true;
  while(조건2){
    var 답 = prompt(String(숫자1)+' X '+String(숫자2)+' = ?')
    if (결과 === Number(답)){
      alert('정답입니다!');
      조건2=false;
    } else {
      alert('틀렸습니다');
      조건1=false;
    }
  }
}
