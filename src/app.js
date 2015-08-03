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
})

angular.module('smartvid').config(['$i18nextProvider', function($i18nextProvider) {
  $i18nextProvider.options = {
      lng: 'en',
      useCookie: false,
      useLocalStorage: false,
      fallbackLng: 'dev',
      resGetPath: './assets/locales/__lng__.json',
      defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
  };
}]);