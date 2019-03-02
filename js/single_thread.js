// 자바스크립트 실행순서 알기: 싱글쓰레드이다.
// 코드를 모두 실행하고 마지막에 예약된 큐를 확인해서 실행한다.
// 따라서 실행결과는 항상 동일하다.

console.log("A");

//예약 (q에 넣어 놓는다)
setTimeout(function () {
  console.log("B");
}, 0);

console.log("C");

//만일 루프가돌면? (계속 루프가 돌기 때문에 q에 있는걸 꺼내올 시간이 없다.)
while(true) {}

//예약목록 확인 및 실행