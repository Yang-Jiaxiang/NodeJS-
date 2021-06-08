var http = require('http')

var server=http.createServer()

server.on('request',function(request,response){
    console.log ('收到客戶端請求'+request.url)
    console.log ('客戶端口號：',request.socket.remoteAddress,request.socket.remotePort)
    var url=request.url
    if(url=='/display'){ //只有/display可以顯示
        //文字顯示
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.write('hello')
        response.write('node.js')
        response.end('你好')
    }
   else if(url=='/plan'){ //只有/plan可以顯示
        //文字顯示
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.write('hello')
        response.write('node.js')
        response.end('你好，這是plan')
    }
    else if(url=='/html'){ //只有/html可以顯示改為text/html
        //html碼 'text/html
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write("<p>,<a href><font color=red size=7 fontface='標楷體'>hello node.js 你好，這是html</font></a></p>")
        response.end()
    } 
    else if(url=='/downlow'){ //只有/html可以顯示改為text/html
        //html碼 'text/html
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write("<p>,<a href='https://drive.google.com/file/d/1NhOv1uMx89-psvqyTmPIQUTNN8jvQFMF/view?usp=sharing' download><font color=red size=7 fontface='標楷體'>20210615 DS 期末作業 B 卷.pdf</font></a></p>")
        response.end()
    } 
    else 
        response.write('please use http://127.0.0.1:8000/display')
        response.end()
})

server.listen(8000,function(){
    console.log('服務器啟動成功，可以通過http://127.0.0.1:8000/訪問')
})