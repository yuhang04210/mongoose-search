var User = require('./user.js');



/*****************************************************************/
//插入数据

//插入数据成功后，注释代码，防止对下面的更新操作造成影响
/*
function insert(){

	var user = new User({
		username:"jack",
		userpwd:"asdfg",
		userage:26,
		logindate:new Date()
	});

	user.save((err,res)=>{
		if(err){
			console.log("插入数据失败"+err);
		}else{
			console.log("插入的数据为"+res)
		}
	});
}

insert();
*/


/*****************************************************************/
//数据的更新


//数据的更新方法一
/*
	function update(){

		var wherestr = {'username':'tom'};
		var updatestr = {"userpwd":"456789"};

		User.update(wherestr,updatestr,(err,res)=>{
			if(err){
				console.log('更新失败'+err);
			}else{
				console.log('更新后的数据为'+res);
			}
		})
	}

	update();
*/

//数据的更新方法二
/*
	function findByIdAndUpdate(){
		var id = '59ca150ab0950b2b5839eff4';
		var updatestr = {'userpwd':"111111"};
		User.findByIdAndUpdate(id,updatestr,(err,res)=>{
			if(err){
				console.log('更新失败'+err);
			}else{
				console.log('更新之前的数据为'+res);
			}
		})
	}
	findByIdAndUpdate();
*/

/*****************************************************************/
//删除数据
/*
function del(){

	//要删除的查询条件
	var wherstr = {'username':'tom'};
	User.remove(wherstr,(err,res)=>{
		if(err){
			console.log(err);
		}else{
			console.log("删除成功"+res);
		}
	})
}
del();
*/


/*****************************************************************/
//数据查询

//查询一
/*
function getByConditions(){

	var wherestr = {'username':'tom'};
	User.find(wherestr,(err,res)=>{
		if(err){
			console.log(err);
		}else{
			console.log('查询到的数据为'+res);
		}
	})
}
getByConditions();
*/

//查询二
//注意：这里是对上面的查询进行完善，find的第二个参数可以设置要查询输出的字段
/*
function getByconditions(){

	//查询的条件
	var wherestr = {"username":'tom'};
	//设置find函数的第二个参数，设置查询输出的字段
	var opt = {'username':1,"_id":0};

	User.find(wherestr,opt,(err,res)=>{
		if(err){
			console.log(err);
		}else{
			console.log('查询的数据为'+res);
		}
	})
}

getByconditions();
*/

//查询三
//范围查询
/*
function getByConditions(){

	//查询条件
	var wherestr = {'userage':{$gte:21,$lte:65}};
	User.find(wherestr,(err,res)=>{
		if(err){
			console.log(err);
		}else{
			console.log('查询成功'+res);
		}
	})
}
getByConditions()
*/


//查询四
//数量查询
/*
function getCountByConditions(){

	//查询条件，这里查询的是所有的数据，也可以设置查询条件
	var wherestr = {};
	User.count(wherestr,(err,res)=>{
		if(err){
			console.log(err);
		}else{
			console.log("查询到的数据一共有"+res+"条");
		}
	});
}
getCountByConditions();
*/

//查询五
//模糊查询
/*
function getByRegex(){

	//通过正则匹配到所有的名字中有m的，并且不区分大小写
	var wherestr = {'username':{$regex:/m/i}};
	User.find(wherestr,(err,res)=>{
		if(err){
			console.log(err);
		}else{
			console.log(res);
		}
	})
}
getByRegex();
*/

//查询六
//分页查询
function getByPage(){

	var pageSize = 5; //一页多少条
	var currentPage = 1 //当前第几页
	var sort = {'logindate':-1};//排序(按照登录时间倒序);
	var condition = {}; //条件
	var skipnum = (currentPage-1)*pageSize; //跳过数

	User.find(condition).skip(skipnum).limit(pageSize).sort(sort).exec((err,res)=>{
		if(err){
			console.log(err);
		}else{
			console.log(res);
		}
	})
}
getByPage();