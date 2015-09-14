/** 
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-11 13:45:39
 * @version 1.0.0
 */

/**
 * 数据库设计
 *
 * Schema 	 模式 \			  \
 * Model  	 模型 -- Mongoose  -- Mongodb
 * Documents 文档 /            /
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
/**
 * MovieSchema 模式定义
 */
var MovieSchema = new Schema({
	country: String,
	director: String,
	flash: String,
	language: String,
	// 录入或者更新的时间
	meta: {
		createAt: {
			type: Date,
			// 默认值
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	},
	poster: String,
	summary: String,
	title: String,
	year: Number
});
// 该方法在每次保存前都会执行
MovieSchema.pre('save', function(next) {
	if (this.isNew) {
		// 如果该数据是新的数据
		this.meta.createAt = this.updateAt = Date.now();
	} else {
		// 如果该数据已经存在，只更新upateAt属性
		this.meta.updateAt = Date.now();
	}
	// 调用next，让存储流程继续
	next();
});
/**
 * 设置一些静态方法
 * 所有的静态方法都不会直接与数据库进行交互的，
 * 只有经过编译和实例化之后才会具有这个方法。
 */
MovieSchema.statics = {
	/**
	 * 用来取出目前数据库里地所有数据
	 * @param  {Function} cb [description]
	 * @return {[type]}      [description]
	 */
	fetch: function(cb) {
		return this
			.find({})
			.sort('meta.updateAt') // 排序
			.exec(cb);
	},
	/**
	 * 更具id查找一条记录
	 * @param  {[type]}   id [description]
	 * @param  {Function} cb [description]
	 * @return {[type]}      [description]
	 */
	findById: function(id, cb) {
		return this
			.findOne({_id: id})
			.exec(cb);
	}
};
/**
 * Model 编译模型
 */
module.exports = mongoose.model('Movie', MovieSchema);

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
});*/