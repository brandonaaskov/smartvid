angular.module('smartvid').directive('avatar', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'avatar.html',
    scope: {
      firstname: '@firstname',
      lastname: '@lastname',
      avatar: '@avatar'
    },
    link(scope) {
      scope.showInitials = function() {
        return !scope.avatar;
      };

      scope.getInitials = function() {
        return scope.firstname.slice(0,1) + scope.lastname.slice(0,1);
      };
    }
  }
});