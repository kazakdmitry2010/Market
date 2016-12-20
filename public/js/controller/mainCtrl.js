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

		
		$scope.add = function(){
			return data.push({name:'fdfdf',adress:'str',product:'soap'});
		}
		$scope.lists = data;

		$scope.sortableOptions = {
    
		    update: function(e, ui) {
		      
		    },
		    stop: function(e, ui) {
		      // this callback has the changed model
		      
		    }
  		};
	});