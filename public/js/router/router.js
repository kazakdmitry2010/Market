angular
    .module('mainModule')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: "html/tpl1.html"
        })
        .when('/about', {
          templateUrl: "html/tpl2.html"
        });
}