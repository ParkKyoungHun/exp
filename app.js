const express = require('express');
const app = express();

app.use('/', (req,res,next)=>{
    console.log(req.url);
    if(req.url.indexOf(".html")!=-1){
        res.sendFile(req.url,{root:__dirname + '/views'});
    }else{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('시작<br>')
        next();
    }
});
app.get('/2',(req,res,next)=>{
    res.sendFile('test.html',{root:__dirname + '/views'});
});
app.get('/',(req,res,next)=>{
    res.write("나나나");
    next();
});

app.get('/',(req,res,next)=>{
    res.write("ttt");
    next();
});
app.use('/', (req,res,next)=>{
    res.write('<br>종료');
    res.end();
    next();
});
app.listen(80,function (){
    console.log("Test Exam : port[80]");
})