(function() {
	'use strict';

	/**
	 * @description
	 * APP 의존성 init관련
	 */
	angular.module('TTADAGAPP', ['ngMaterial']);
	angular.module('TTADAGAPP')
		.controller('APPController', ['$scope', function($scope) {
			$scope.start = function() {
				alert('start');
			}
		}]);
})();