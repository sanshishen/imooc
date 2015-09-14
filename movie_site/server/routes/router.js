/**
 * Server end router
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-07 17:04:58
 * @version 1.0.0
 */
// 使用严格模式
'use strict';
module.exports = function(app) {
	var movie = require('../controllers/movie')();
	// 首页数据
	app.route('/index')
		.get(movie.all);
	// 详情页数据
	app.route('/movie/:_id')
		.get(movie.findById);
	// 后台录入页面
	app.get('/admin/add', function(req, res) {
		res.json({
			title: '',
			movie: {
				title: '',
				director: '',
				country: '',
				year: '',
				poster: '',
				flash: '',
				summary: '',
				language: ''
			}
		});
	});
	// 后台列表页
	app.route('/admin/list')
		.get(movie.list);
		
	app.get('*', function(req, res) {
		// 加载单视图文件
		// 前端将会由angular控制页面的改变
		res.sendfile('./public/views/index.html');
	});
};