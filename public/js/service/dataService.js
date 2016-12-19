angular.module("mainModule")
	.factory("dataService", function(){
		return{
		 Markets: {	
			market1:{
				name:'superMarket',
				product : 'soap',
				adress : 'Slobodskay str'
			},
			market2:{
				name:'Almi',
				product : 'shampoo',
				adress : 'esenina str'
			},
			market3:{
				name:'Rublevsky',
				product : 'doggy soap',
				adress : 'Cosmonaut str'
			},
			market4:{
				name:'Green Klen',
				product : 'Teeth paste',
				adress : 'Cosmonaut str'
			},
			market5:{
				name:'Evroopt',
				product : 'home chemical',
				adress : 'Nemiga str'
			},
			market6:{
				name:'Evroopt--23',
				product : 'amphetamine',
				adress : 'Dzerjinskogo str'
			}
		}
	 };	
	});