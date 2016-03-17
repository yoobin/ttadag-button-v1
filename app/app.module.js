(function() {
	'use strict';

	/**
	 * @description
	 * APP 의존성 init관련
	 */
	angular.module('TTADAGAPP', ['ngMaterial', 'pascalprecht.translate']);

	angular.module('TTADAGAPP').config(['$translateProvider', function($translateProvider) {
		$translateProvider.translations('en', {
			'TITLE': 'Hello'
		});

		$translateProvider.translations('ko', {
			'TITLE': '안녕하세요'
		});

		$translateProvider.preferredLanguage('ko');
		$translateProvider.useSanitizeValueStrategy('escape');
	}]);


	angular.module('TTADAGAPP')
		.controller('APPController', ['$scope', function($scope) {
			$scope.start = function() {
				alert('start');
			}
		}]);
})();