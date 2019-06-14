const mongoose = require('mongoose');
//连接数据库 mysql框架
const url = "mongodb://localhost:27017/hgsd";
mongoose.connect(url,{useNewUrlParser: true});

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + url);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;