'use strict';

angular.module('core').controller('MainController', ['$scope', 'Authentication', 'Menus','$mdSidenav',
	function($scope, Authentication, Menus, $mdSidenav) {


		$scope.toggleSidenav = function(menuId) {
			debugger;
			var sideNav =  document.getElementById('sideNav'),
					sideFlexVal = sideNav.getAttribute('flex'),
					mainCont = document.getElementById('mainCont'),
					materialCont = mainCont.querySelector('.togglecls'),
					mainContFlexVal = mainCont.getAttribute('flex');

	     if(	materialCont.innerHTML  == "close"){
					//sideNav.setAttribute("flex",0);
					$('#sideNav').velocity({
				    width: "0vw",
				  }, {
				    duration: 500,
				    easing: "linear"
				  } );
					$('#mainCont').velocity({
				    width: "100vw",
				  }, {
				    duration: 500,
				    easing: "linear"
				  } );
					$('.userCls').hide();
					materialCont.innerHTML ="reorder";
			 }else{
				$('.userCls').show();
				$('#sideNav').velocity({
					width: "10vw",
				}, {
					duration: 500,
					easing: "linear"
				} );
				$('#mainCont').velocity({
					width: "90vw",
				}, {
					duration: 500,
					easing: "linear"
				} );
					materialCont.innerHTML ="close";
			}
	  };

	}
]);
