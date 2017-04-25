var app = angular.module('App', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'userController'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'listController'
    })
    .when('/user/:id', {
      templateUrl: 'partials/user.html',
      controller: 'userListController'
    })
    .otherwise({
      redirectTo: '/dashboards'
    });
});
