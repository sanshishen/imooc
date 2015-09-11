/**
 * Movie Controller
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-07 21:48:20
 * @version 1.0.0
 */
angular.module('MovieCtrlModule', []).controller('MovieHomeCtrl', ['$scope', 'MyHttp', 
	function($scope, MyHttp){
		MyHttp.get('/index')
			.success(function(data) {
				$scope.title = data.title;
				$scope.movies = data.movies;
			});
	}
]).controller('MovieDetailCtrl', ['$scope', '$stateParams', 'MyHttp', 
	function($scope, $stateParams, MyHttp){
		MyHttp.get('/movie/' + $stateParams._id)
			.success(function(data) {
				$scope.title = data.title;
				$scope.movie = data.movie;
			});
	}
]).controller('MovieListCtrl', ['$scope', 'MyHttp', 
	function($scope, MyHttp){
		MyHttp.get('/admin/list')
			.success(function(data) {
				$scope.title = data.title;
				$scope.movies = data.movies;
			});
	}
])