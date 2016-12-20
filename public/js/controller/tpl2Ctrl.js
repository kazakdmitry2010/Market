angular.module("mainModule")
	.controller("tpl2Ctrl", function($scope, dataService, uiGmapIsReady){
		$scope.map = {
        center: {
            latitude: 55.711898,
            longitude: 9.5387363
        },
        zoom: 12,
        options: {
        },
        control: {}
    };
		 
	});