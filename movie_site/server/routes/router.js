/**
 * Server end router
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-07 17:04:58
 * @version 1.0.0
 */
module.exports = function(app) {
	// 首页数据
	app.get('/index', function(req, res) {
		var data = {
			title: 'imooc 首页',
			movies: [{
				_id: '01',
				title: '机械战警',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}, {
				_id: '02',
				title: '机械战警',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}, {
				_id: '03',
				title: '机械战警',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}, {
				_id: '04',
				title: '机械战警',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}, {
				_id: '05',
				title: '机械战警',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}, {
				_id: '06',
				title: '机械战警',
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
			}]
		};
		res.json(data);
	});
	// 详情页数据
	app.get('/movie/:_id', function(req, res) {
		var _id = req.params._id;
		res.json({
			title: '影片详情页',
			movie: {
				director: '何塞·帕蒂利亚',
				country: '美国',
				title: '机械战警',
				year: 2014,
				poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
				language: '英语',
				flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
				summary: '2028年，专事军火开发的机器人公司Omni Corp.生产了大量装备精良的机械战警，他们被投入到惩治犯罪等行动中，取得显著的效果。罪犯横行的底特律市，嫉恶如仇、正义感十足的警察亚历克斯·墨菲（乔尔·金纳曼 饰）遭到仇家暗算，身体受到毁灭性破坏。借助于Omni公司天才博士丹尼特·诺顿（加里·奥德曼 饰）最前沿的技术，墨菲以机械战警的形态复活。数轮严格的测试表明，墨菲足以承担起维护社会治安的重任，他的口碑在民众中直线飙升，而墨菲的妻子克拉拉（艾比·考尼什 饰）和儿子大卫却再难从他身上感觉亲人的温暖。感知到妻儿的痛苦，墨菲决心向策划杀害自己的犯罪头子展开反击……'
			}
		});
	});
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
	app.get('/admin/list', function(req, res) {
		res.json({
			title: '后台列表页',
			movies: [{
				_id: '01',
				director: '何塞·帕蒂利亚',
				country: '美国',
				title: '机械战警',
				year: 2014,
				language: '英语',
				flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf'
			}]
		});
	});
	app.get('*', function(req, res) {
		// 加载单视图文件
		// 前端将会由angular控制页面的改变
		res.sendfile('./public/views/index.html');
	});
};