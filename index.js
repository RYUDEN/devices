const Koa = require('koa');
const bodyparser = require('koa-bodyparser')
const router = require('./routes');

const { deviceInfo, deviceList } = require('./controller')
const app = new Koa();

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    ctx.set("Access-Control-Allow-Credentials", false);
    // 这里获取 origin 请求头 而不是用 *
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Authorization");
    ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    ctx.set("Content-Type", "application/json;charset=utf-8");
});

app.use(router.routes(), router.allowedMethods())

app.listen(2335);
