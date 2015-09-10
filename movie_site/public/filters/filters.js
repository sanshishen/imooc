/**
 * movie filter
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-10 15:00:41
 * @version 1.0.0
 */
/**
 * FilterModule Module
 *
 * Description
 */
angular.module('FilterModule', []).filter('trusted', function($sce) {
	return function(url) {
		return $sce.trustAsResourceUrl(url);
	};
});