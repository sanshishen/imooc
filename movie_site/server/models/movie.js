/**
 * 数据库设计
 *
 * Schema 	 模式 \			  \
 * Model  	 模型 -- Mongoose  -- Mongodb
 * Documents 文档 /            /
 * 
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-11 13:45:39
 * @version 1.0.0
 */
var mongoose = require('mongoose');
/**
 * MovieSchema 模式定义
 */
var MovieSchema = new mongoose.Schema({
	title: String,
	director: String,
	country: String,
	language: String,
	year: Number,
	summary: String
});
/**
 * Model 编译模型
 */
var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;

/**
 * Documents 文档实例化
 */
/**
 * 对象保存
 * @type {Movie}
 */
/*var movie = new Movie({
	title: '机械战警',
	director: '何塞·帕蒂利亚',
	yar: 2014
});
movie.save(function(err) {
	if (err) return handleError(err);
});*/
// var Movie.require('./models/movie.js');
/**
 * 数据库批量查询
 */
/*app.get('/index', function(req, res) {
	Movie
		.find({})
		exec(function(err, movies) {
			res.json({
				title: 'imooc 首页',
				movies: movies
			});
		});
});*/
/**
 * 单条查询
 */
/*app.get('/movie/:_id', function(req, res) {
	Movie
		.findOne({_id: res.params._id})
		exec(function(err, movie) {
			res.json({
				title: '影片详情页',
				movie: movie
			});
		});
});*/
/**
 * 单条删除
 */
/*app.get('/movie/delete/:_id', function(req, res) {
	Movie
		.remove({_id: res.params._id}, function(err, movie) {
			if (err) console.log(err);
		});
});