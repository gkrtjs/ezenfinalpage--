
/*1. 변수란 : let키워드 이용한 데이터 1개 저장할수 있는 공간 */
let 변수 = 10;
/*2. 객체란 : {} 중괄호 이용한 속성명과 데이터 여러개 저장할수있는 공간 */
let 객체 = { '이름' : "유재석" , '나이' : 52 , '직압' : '개그맨 '}
/* 3. 배열이란 : [데이터 (객체) , 데이터 (객체) , 데이터 (객체) ] 대괄호 이용한 여러개 데이터를 저장할수있는 공간*/
let 배열 = ['유재석' , '강호동' , '신동엽'];
/* 4. 함수란 : function 함수명 (매개변수){실행문;} 코드를 묶어서 재사용*/
function 함수( 매개변수 ){
    //코드
}

/* 5. 미리만들어진 객체/함수 = 개발자를 위해 JS만든 사람이 미리만든 객체/함수*/
console.log('');
document.write('');
/*
// 1. document : HTML에 관련된 기능 제공해주는 객체 
   .querySelector : query (질의) Selectior(선택)
   .innerHTML = 문자열데이터 : <마크업> </마크업>
*/
 // ================== 오늘 날짜/시간 객체 : new Date() ============
console.log( new Date() );
let 현재연도 = new Date().getFullYear();    // 오늘 날짜에서 '연도' 만 추출 
let 현재월 = new Date().getMonth()+1;         // 오늘 날짜에서 '월'만 추출 [ 0:1월 1:2월 2:3월 ] +1 [ 1:1월 ]

console.log( 현재연도 ); console.log( 현재월 );

// 1. 특정 위치에 현재연도 와 현재월 대입 하는 함수 
연도월출력함수();  // 함수실행
function 연도월출력함수(){ // 함수정의
    // =================== 달력 상단 =============== //
    // 1. 어디에
    let calDate = document.querySelector('.calDate');
    // 2. 무엇을
    let dateHTML = ` ${ 현재연도 } 년 ${ 현재월 } 월`;    // `(백틱) 사이에 문자입력이 가능. 백틱 사이에 변수/객체/배열/함수실행 ${ } 안에 대입
    // 3. 대입 
    calDate.innerHTML = dateHTML;

    // ==================== 달력 =================== //
    // 1. 어디에 
    let calender = document.querySelector('.calender')
    // 2. 무엇을 
        // 1. 요일 HTML 
    let calenderHTML = `<div class="week sunday">일</div>  
                        <div class="week">월</div>  <div class="week">화</div>  
                        <div class="week">수</div>  <div class="week">목</div>  
                        <div class="week">금</div>  <div class="week">토</div>`;
        // 2. 일 HTML
    for( let day = 1 ; day <= 31 ; day++ ){
            // day는 1부터 31 까지 1씩 증가하면서 반복 
        calenderHTML += `<div> ${day} </div>`
        // += : 복합대입연산자 : (누적) 오른쪽값을 왼쪽에 더한후에 왼쪽변수에 대입 
    }

    // 3. 대입 
    calender.innerHTML = calenderHTML;

} // f end 

// 2. 화살표 버튼을 클릭해서 현재 월을 증가/감소 함수 
function 월증감( 타입 ){
    console.log( '월증가감소 함수 실행');
    // 2-1 만약에 타입이 0 이면 월 감소 , 타입이 1 이면 월 증가 
        // if 조건문 : if( 조건 ){ true }else{ false }
    if( 타입 == 0 ){  
        현재월 = 현재월-1; 
        if( 현재월 < 1 ){ // 만약에 현재월 을 감소 했을떄 1보다 작아지면 12월로 설정 하고 연도를 1차감
            현재월 = 12; 
            현재연도 = 현재연도 - 1;
        }
    }
    else{ 
        현재월 = 현재월+1; 
        if( 현재월 > 12 ){
            현재월 = 1;
            현재연도 = 현재연도 + 1;
        }
    }
    // 2-2 월 변수가 변경되었기 때문에 연도월 출력도 다시.. 새로고침
    연도월출력함수(); // 해당 코드를 가지고 있는 함수를 실행.
} // f end 
