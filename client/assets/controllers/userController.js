app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies', '$rootScope', function($scope, userFactory, $location, $cookies, $rootScope) {
  $rootScope.flag = false;
  $scope.errors = {};
  var index = function() {
    if ($cookies.get('_user')) {
      $rootScope.flag = true;
      if ($location.url() == '/') {
        $location.url('/dashboard');
      }
    } else {
      $rootScope.flag = false;
    }
  }
  index();

  $scope.login = function() {
    userFactory.login($scope.user, function(data) {
      if (data.errors) {
        $scope.errors = data.errors;
        $location.url('/');
      } else {
        $cookies.put('_user', data.user._id);
        $cookies.put('_username', data.user.name);
        $rootScope.flag = true;
        $location.url('/dashboard');
      }
      $scope.user = {};
    })
  };

  $scope.logout = function() {
    $cookies.remove('_user');
    $cookies.remove('_username');
    $rootScope.flag = false;
    $location.url('/');
  }
}]);
