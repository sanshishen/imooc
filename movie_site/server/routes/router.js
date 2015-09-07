/**
 * Server end router
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-07 17:04:58
 * @version 1.0.0
 */
module.exports = function(app) {
	/*app.get('/index', function(req, res) {
	});*/
	app.get('*', function(req, res) {
		// 加载单视图文件
		// 前端将会由angular控制页面的改变
		res.sendfile('./public/views/index.html');
	});
};