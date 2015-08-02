angular.module('angular-seed').directive('navigation', function ($location) {
  return  {
    restrict: 'E',
    replace: true,
    templateUrl: 'navigation.html',
    link(scope) {
      scope.goTo = $location.url
    }
  }
})

