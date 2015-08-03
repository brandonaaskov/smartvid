angular.module('smartvid', [
  'ngRoute',
  'ngCookies',
  'ngSanitize',
  'jm.i18next',
  'templates'
]).run(function ($cookies, utils, $rootScope) {
  if (!$cookies.guid) {
    $cookies.guid = utils.createGuid()
  }

  //TODO - Temp have this in as a stub.
  $rootScope.user = {
    firstName: 'Joe',
    lastName: 'Dirt',
    role: 'Super',
    account: {
      name: "Acme Construction"
    }
  };
});