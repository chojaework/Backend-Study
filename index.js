const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) { 
  res.send('Hello World')
})

app.listen(port, () => { // port 번호에 대해 listen 하는 중이다
    console.log(`Example app listening on port $(port)`)
    // port를 듣고 있다는 확인 메시지
})