//定义Schema
var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username:{type:String}, //用户账号
	userpwd:{type:String},  //用户密码
	userage:{type:Number},	//年龄
	logindate:{type:Date}   //最近登录时间
})


//定义好了Schema,接下类定义Model，Model是Schema生成的模型，可以对数据库进行操作
module.exports = mongoose.model('User',UserSchema);


