angular.module('mainModule')
	.controller("mainCtrl",function($scope,dataService){
		$scope.dataMarkets = dataService.Markets;

		var t = $scope.dataMarkets;

		var data = [];

		for(var key in t){
			data.push(
				t[key]
				
			);
		}

		$scope.lists = data;

		$scope.markets = [1,2,3,4,5]
		$scope.sortableOptions = {
    
		    update: function(e, ui) {
		      
		    },
		    stop: function(e, ui) {
		      // this callback has the changed model
		      
		    }
  		};
	});