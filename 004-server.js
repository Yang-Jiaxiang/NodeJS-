var http = require('http')

var server=http.createServer()

server.on('request',function(){
    console.log ('收到客戶端請求')
})

server.listen(8000,function(){
    console.log('服務器啟動成功，可以通過http://127.0.0.1:8000/訪問')
})