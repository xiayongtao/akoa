const path = require('path')
const os = require('os')

let config = {
  PORT: 7999, // 程序启动所监听的端口
  serverUrl: 'http://127.0.0.1:7999', // nginx所配置的地址与端口 给用户邮件时会用到这个url。
  ImagePath: os.platform() === 'win32' ? path.join(__dirname, '../../images') : '/var/www/images',
  ImageType: ['.jpg', '.JPG', '.png'],
  STDOUT: true, // 是否打印出来
  // ------- mysql ------------
  mysqlConfig: {
    user: 'root',
    database: 'akoa',
    debug: false
  },
  // ------- log ------------
  logConfig: {
    logDay: 1 // 日志保存天数
  },

  // ------- reids ------------
  redisConfig: {
    host: '127.0.0.1'
  },
  EXPIRE: 3600, // redis缓存的生存时间 1h,1*60*60
  checkList: ['name', 'nick_name', 'email'], // 用于重复检测，同时禁止其它用户以这些用户名注册
  // ------ email ---------
  emailConfig: {
    host: 'smtp.exmail.qq.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '', // 邮箱地址与密码
      pass: ''
    }
  },
  // ------ init ---------
  initConfig: {// 初始管理员账号密码
    adminName: 'akoa',
    adminPassword: 'akoa'
  }
}
module.exports = config
