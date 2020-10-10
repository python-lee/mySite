const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const rest = require('./rest');
const app = new Koa();

const controller = require('./controller');

app.use(bodyParser());
app.use(rest.restify());
app.use(controller());

app.listen(3000);
console.log('app started at port 3000')