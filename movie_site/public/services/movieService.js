/**
 * Movie Service
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-08 14:21:33
 * @version 1.0.0
 */
angular.module('MoviceServiceModule', []).factory('MyHttp', ['$http', function($http){
	return {
		get: function(url) {
			return $http.get(url);
		},
		post: function(url, data) {
			return $http.post(url, data);
		},
		delete: function(url, id) {
			return $http.delete(url + id);
		}
	};
}])