var fs=require('fs')

fs.writeFile('003.txt','大家好003寫入測試',function(error){
    console.log('寫入成功')
})