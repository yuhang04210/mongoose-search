//mongoose连接数据库
var mongoose = require('mongoose');

//连接
mongoose.connect("mongodb://127.0.0.1:27017/mongose");

//连接成功
mongoose.connection.on('connected',()=>{
	console.log('连接成功');
})


//连接失败
mongoose.connection.on('error',(error)=>{
	console.log('连接失败'+err);
})

//断开连接
mongoose.connection.on('disconnected',()=>{
	console.log('断开连接');
})



module.exports = mongoose;