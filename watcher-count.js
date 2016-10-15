/* global angulr */

(function(angular) {

	'use strict';

	angular.module('pads.watcherCount', []).service('padsWatcherCount', function () {
		/**
		 * @param {HTMLElement} element
		 * @param {[]} [watchers]
		 * @returns {[]}
		 */
		function findWatchers(element, watchers) {
			watchers = watchers || [];

			angular.forEach(['$scope', '$isolateScope'], function (scopeProperty) {
				if (
					element.data() &&
					element.data().hasOwnProperty(scopeProperty)
				) {
					angular.forEach(element.data()[scopeProperty].$$watchers, function (watcher) {
						watchers.push(watcher);
					});
				}
			});

			angular.forEach(element.children(), function (childElement) {
				findWatchers(angular.element(childElement), watchers);
			});

			return watchers;
		}

		return function getWatcherCount() {
			var root = angular.element(document.getElementsByTagName('body')),
				watchers = findWatchers(root),
				watchersWithoutDuplicates = [];

			angular.forEach(watchers, function (item) {
				if (watchersWithoutDuplicates.indexOf(item) < 0) {
					watchersWithoutDuplicates.push(item);
				}
			});

			return watchersWithoutDuplicates.length;
		};
	});
})(angular);