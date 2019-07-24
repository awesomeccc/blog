module.exports = {
    environment: 'dev',
    database: {
        dbName: 'ccbolg',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root123'
    },
    security: {
        secretKey: "secretKey",
        // 过期时间 1小时
        expiresIn: 60 * 60
    },
    wx: {
        appId: 'wx127ff6205a724b43',
        appSecret: '',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}
