angular.module('mainModule')
	.controller("mainCtrl",function($scope,dataService){
		$scope.dataMarkets = dataService.Markets;

		$scope.sortableOptions = {
			items: '>li'
		};
	});