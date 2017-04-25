app.controller('listController', ['$scope', 'listFactory', '$location', '$cookies', '$rootScope', '$routeParams', function($scope, listFactory, $location, $cookies, $rootScope, $routeParams) {
  $scope.lists = []
  $scope.name = $cookies.get('_username');
  $scope.allUsers = {}
  $scope.errors = {};
  $scope.newList = {};
  var index = function() {
    if (!$cookies.get('_user')) {
      $location.url('/');
    } else {
      listFactory.getUserList(function(data) {
        $scope.lists = []
        for (let i = 0; i < data.list.length; i++) {
          if (data.list[i]._user._id == $cookies.get('_user')) {
            $scope.lists.push(data.list[i])
          }
          if (data.list[i]._taggeduser) {
            if (data.list[i]._taggeduser._id == $cookies.get('_user')) {
              $scope.lists.push(data.list[i])
            }
          }
        }
      })
      listFactory.getAllUser($cookies.get('_user'), function(data) {
        $scope.allUsers = data.users;
      })
    }
  }

  index();
  $scope.createList = function() {
    $scope.newList._user = $cookies.get('_user');
    listFactory.createList($scope.newList, function(data) {
      if (data.errors) {
        $scope.errors = data.errors;
      } else {
        index();
        $scope.newList = {};
      }
    })
  }
  $scope.updateCompletion = function(listID) {
    listFactory.updateCompletion(listID, function(data) {
      if (data.errors) {
        $scope.errors = data.errors;
      } else {
        index();
      }
    })
  }
}]);;
