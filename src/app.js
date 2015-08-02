angular.module('angular-seed', [
  'ngRoute',
  'ngCookies',
  'templates'
]).run(function ($cookies, utils) {
  if (!$cookies.guid) {
    $cookies.guid = utils.createGuid()
  }
})
