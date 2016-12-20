angular
    .module('mainModule')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: "html/tpl1.html",
          controller:'mainCtrl'
        })
        .when('/googlemaps', {
          templateUrl: "html/tpl2.html",
          controller: 'tpl2Ctrl'
        });
}