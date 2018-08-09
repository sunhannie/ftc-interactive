
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const fs = require('fs');
const views = require('koa-views');

const app = new Koa();
const router = new Router();

app.use(logger());

app.use(views(path.resolve(__dirname,'views'), {
  map:{
    html:'nunjucks'
  }
}));

async function showPage(pagename, data, ctx) {
  await ctx.render(pagename,data);
}
router.get('/', showPage.bind(this,'test',{
}));

router.get('/test',async ctx => {
   await ctx.render('test.html');
});


router.get('/data', ctx => {
     ctx.set({
      'Access-Control-Allow-Origin':'http://localhost:3000',
      'Cache-Control': 'public, max-age=604800',
      'Etag': '1234',
      'Last-Modified': new Date(),
      'Access-Control-Request-Method': 'GET,PUT,POST',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Request-Headers':'X-Custom-Header',
      'Access-Control-Max-Age': 1728000
    });
    ctx.type = 'json';
    ctx.body = fs.readFileSync('./client/data/china.json');
})

app.use(router.routes());

app.listen(3001, () => {
  console.log('Serving crossorigin pages. Listening 3001 with domain localhosts');
})

