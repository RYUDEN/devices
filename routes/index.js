const fs = require("fs");
const router = require('koa-router')()
const controller = require('../controller');
// x-response-time
router.get('/', async (ctx, next) => {
  ctx.body = 'Hello !'
})
router.get('/api/phone/add', controller.deviceInfo) //统计机型
router.get('/api/phone/get', controller.deviceList) //查看机型
module.exports = router