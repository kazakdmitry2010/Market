angular.module('mainModule')
	.controller("mainCtrl",function($scope,dataService){
		$scope.dataMarkets = dataService.Markets;

		$scope.sortableOptions = {
    
		    update: function(e, ui) {
		      
		    },
		    stop: function(e, ui) {
		      // this callback has the changed model
		      
		    }
  		};
	});