angular.module('angular-seed').config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html'
    })
    .when('/404', {
      templateUrl: '404.html'
    })
    .otherwise({
      redirectTo: '/404'
    })

  $locationProvider.html5Mode(false)
})
