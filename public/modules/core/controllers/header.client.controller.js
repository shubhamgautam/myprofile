'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus','$mdSidenav',
	function($scope, Authentication, Menus, $mdSidenav) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

		$scope.toggleSidenav = function(menuId) {
			debugger;
	    $mdSidenav(menuId).toggle();
	  };

	}
]);
