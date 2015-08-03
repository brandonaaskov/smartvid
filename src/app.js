angular.module('smartvid', [
  'ngRoute',
  'ngCookies',
  'templates'
]).run(function ($cookies, utils) {
  if (!$cookies.guid) {
    $cookies.guid = utils.createGuid()
  }
})
