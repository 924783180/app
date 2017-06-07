let express = require('express');
let path=require('path');
let app = express();
app.listen(3000);

let notice = require('./notice/notice');
app.get('/api/notice', (req,res)=>{
    res.send(notice);
});
let js = require('./js/js');
app.get('/api/js/:hash?', (req,res)=>{
    res.send(js);
});
let css = require('./css/css');
app.get('/api/css/:hash?', (req,res)=>{
    res.send(css);
});
let content = js;
app.get('/api/content', (req,res)=>{
    res.send(content);
});


app.get('/', (req,res)=>{
    res.sendFile(path.resolve('../dist/index.html'));
});
app.get('/bundle.js', (req,res)=>{
    res.sendFile(path.resolve('../dist/bundle.js'));
});