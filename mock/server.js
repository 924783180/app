let Koa=require('koa');
let Router=require('koa-router');
let app=new Koa;
let router=new Router();
let ad=require('./home/ad');
router.get('/api/ad',(ctx)=>{
    ctx.body=ad;
});
let list=require('./home/list');
router.get('/api/list/:city/:page',(ctx)=>{
    ctx.body=list;
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(80);