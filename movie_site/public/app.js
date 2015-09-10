/**
 * movie routers
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-07 16:44:56
 * @version 1.0.0
 */
var movieApp = angular.module('MovieApp', ['ui.router', 'MovieCtrlModule', 'MoviceServiceModule', 'DirectiveModule', 'FilterModule']);
/**
 * 所有模块加载完成之后运行一次
 * 将header放入模板缓存
 * @param  {[type]} $templateCache  模板缓存模块
 */
/*movieApp.run(['$templateCache', '$http',function($templateCache, $http) {
	$http.get('/views/tpls/header.html').then(function(tpl) {
		$templateCache.put('header', tpl.data);
	}, function(response) {
		console.log('load the header template faild, status: ' + response.status);
	});
}]);*/
movieApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index', {
			url: '/index',
			templateUrl: '/views/tpls/home.html',
			controller: 'MovieHomeCtrl'
		})
		.state('movie', {
			url: '/movie/:_id',
			templateUrl: '/views/tpls/detail.html',
			controller: 'MovieDetailCtrl'
		})
		.state('add', {
			url: '/admin/add',
			templateUrl: '/views/tpls/admin.html'
		})
		.state('update', {
			url: '/admin/update/:_id',
			templateUrl: '/views/tpls/admin.html'
		})
		.state('list', {
			url: '/admin/list',
			templateUrl: '/views/tpls/list.html'
		})
});