const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) { 
  res.send('Hello World')
})
// get: HTTP 메소드 - 요청의 목적, 종류를 알려주기 위해 사용하는 수단
//   get - 주소창에서 데이터 전달
//   post - 내부적으로 body에 데이터 전달
// app.get: http 메소드 중에 get 메소드로 들어온 것을 받겠다

// '/': 라우팅
// 라우팅: https://www.youtube.com/watch?v=Tt_tKhhhJq 에서 /watch?v=Tt_tKhhhJq 이부분에 해당
// app.get('/') : 기본주소 '/'

// ()=>{}: 콜백 함수 - 함수(끝나고 실행할 함수)
// app.get('/' 으로 들어와서 이 함수가 실행되면 
//(req, res) { // req는 요청 res는 응답
//     res.send('Hello World') // 응답에 'Hello World!'를 보내겠다는 뜻
// } 이 함수가 실행

app.listen(port, () => { // port 번호에 대해 listen 하는 중이다
    console.log(`Example app listening on port $(port)`)
    // port를 듣고 있다는 확인 메시지
})
// port: 항구, usb 포트 같이 들어올 수 있는 입구
// port 마다 규칙이 있음 ex) 80번은 HTTP
// localhost는 내 컴퓨터로 접속할 때 사용
// 3000번 port에 대해서 듣고 있는 것
// 콜백 함수 (console.log) 실행


// listen이 계속 실행되다가
// chrome 창에 localhost:3000 입력하면
// 주소창을 이용했으므로 get 방식으로 작동, 뒤의 콜백 함수 실행
// 콜백 함수는 res에 'Hello World!'를 send 한다
// 화면에 표시가 된다