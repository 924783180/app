let express = require('express');
let path=require('path');
let app = express();
app.listen(3000);

let content = require('./content/content');
//广告的接口
app.get('/api/content', (req,res)=>{
    res.send(content);
});
let notice = require('./notice/notice');
//广告的接口
app.get('/api/notice', (req,res)=>{
    res.send(notice);
});
app.post('/api/comment',(req,res)=>{
    console.log(req.body);
    res.send({msg:'ok'});
});
let js = require('./js/js');
app.get('/api/js', (req,res)=>{
    res.send(js);
});
app.get('/', (req,res)=>{
    res.sendFile(path.resolve('../dist/index.html'));
});
app.get('/bundle.js', (req,res)=>{
    res.sendFile(path.resolve('../dist/bundle.js'));
});