/**
 * movie directive
 * @author  sanshishen
 * @email   1327653237@qq.com
 * @date    2015-09-10 15:08:07
 * @version 1.0.0
 */
/**
* DirectiveModule Module
*
* Description
*/
angular.module('DirectiveModule', []).directive('youku', function() {
	return {
		restrict: 'E',
		scope: {
			src: '='
		},
		replace: true,
		templateUrl: '/views/tpls/youku.html'
	};
});