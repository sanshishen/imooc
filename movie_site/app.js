/**
 * 程序入口
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-07 15:37:52
 * @version 1.0.0
 */
var express = require('express'),
	// 端口设置，可以从变量中传入，默认为3000
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	// 引入path，设置静态文件地址
	path = require('path'),
	// 加载数据库配置
	database = require('./server/config/database'),
	app = express();
// 连接mongodb
mongoose.connect(database.url);
// 后台有提交表单操作，使用bodyParser，表单数据格式化
app.use(bodyParser.json());
// 设置静态文件目录
//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/public')));
// 加载路由
require('./server/routes/router')(app);
// 监听端口
app.listen(port);
console.log('movie site started on port ' + port);