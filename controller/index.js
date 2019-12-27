const Phone = require('../db').Phone

module.exports = {
    async deviceInfo(ctx, next) {
        const data = {
            host: ctx.request.header.host,
            userAgent: ctx.request.header['user-agent'],
            ua: ctx.request.header['sec-ch-ua'],
        }
        try {
            let infoRes = new Phone(data)
            await infoRes.save()
            ctx.body = {
                code: 200,
                data: data,
                msg: '成功!'
            }
        }catch (e) {
            ctx.body = {
                code: 500,
                msg: '服务器异常，请稍后再试!'
            }
        }
    },
    async deviceList(ctx, next) {
        let { page = 1 } = ctx.request.query;

        try {
            let res = await Phone
            .find({},null,{ limit: 20 , skip: 10* (page - 1) })
            .sort({'_id':-1});
            if (res.length>0){
                ctx.body = {
                    code: 200, 
                    msg: '成功',
                    data: res,
                    page: page,
                }
            } else {
                ctx.body = {
                    code: 404, 
                    msg: '无记录',
                    data: res,
                    page: page,
                }
            }
        } catch(e) {
            ctx.body = {
                code: 500,
                msg: e
              }
        }
    }
}