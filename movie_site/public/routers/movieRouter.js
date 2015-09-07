/**
 * movie routers
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-07 16:44:56
 * @version 1.0.0
 */
angular.module('MovieApp', ['ui.router', 'MovieListModule']).config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index', {
			url: '/index',
			views: {
				'': {
					templateUrl: '/views/tpls/home.html'
				}
			}
		});
});