let express = require('express');
let path=require('path');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
let Notice = require('./model').Notice;
let find=(obj,cb)=>(Notice.find(obj,cb));
let update=(conditions,obj,cb)=>(Notice.update(conditions,obj,cb));
app.listen(3000);

app.get('/api/notice', (req,res)=>{
    find({id:0},(err,doc)=>{
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
    });
});
app.get('/api/js/:hash?', (req,res)=>{
    find({type:'jsDetail'},(err,doc)=>{
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
    });
});
app.get('/api/css/:hash?', (req,res)=>{
    find({type:'cssDetail'},(err,doc)=>{
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
    });
});
app.get('/api/content', (req,res)=>{
    find({},(err,doc)=>{
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
    });
});
app.post('/api/click', (req,res)=>{
    let body='',jsonStr;
    req.on('data',(chunk)=>{
        body+=chunk
    });
    req.on('end',()=>{
        jsonStr=JSON.parse(body);
        let id=jsonStr.id;
        update({id:id},jsonStr,(err,doc)=>{
            if(err){
                res.send(err)
            }
        });
    })
});
app.get('/api/react', (req,res)=>{
    find({type:'reactDetail'},(err,doc)=>{
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
    });
});
app.get('/api/rank', (req,res)=>{
    Notice.find({},null,{sort:{number:-1}},(err,doc)=>{
        if(err){
            res.send(err)
        }else{
            res.send(doc)
        }
    })
});
app.get('/api/recent', (req,res)=>{
    Notice.find({},null,{sort:{id:-1}},(err,doc)=>{
        if(err){
            res.send(err)
        }else{
            res.send(doc)
        }
    })
});

app.get('/images/favicon.ico', (req,res)=>{
    res.sendFile(path.resolve('./images/favicon.ico'));
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve('../dist/index.html'));
});
app.get('/bundle.js', (req,res)=>{
    res.sendFile(path.resolve('../dist/bundle.js'));
});