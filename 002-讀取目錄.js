var fs=require('fs')

fs.readFile('002.txt',function(error,data){
    console.log(data.toString())
})
