/**
 * Movie Controller
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-07 21:48:20
 * @version 1.0.0
 */
angular.module('MovieListModule', []).controller('MovieListCtrl', function($scope){
	$scope.movies = [{
		_id: '01',
		title: '01',
		poster: ''
	},{
		_id: '02',
		title: '02',
		poster: ''
	}];
});