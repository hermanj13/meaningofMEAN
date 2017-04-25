app.controller('userListController', ['$scope', 'listFactory', '$location', '$cookies', '$rootScope', '$routeParams', function($scope, listFactory, $location, $cookies, $rootScope, $routeParams) {
  $scope.lists = []
  var index = function() {
    if (!$cookies.get('_user')) {
      $location.url('/');
    } else {
      listFactory.getUserList(function(data) {
        $scope.lists = []
        for (let i = 0; i < data.list.length; i++) {
          if (data.list[i]._user._id == $routeParams.id) {
            $scope.lists.push(data.list[i])
          }
          if (data.list[i]._taggeduser) {
            if (data.list[i]._taggeduser._id == $routeParams.id) {
              $scope.lists.push(data.list[i])
            }
          }
        }
      });
      listFactory.getSingleUser($routeParams.id, function(data) {
        $scope.name = data.users.name
      })
    }
  }
  index();
}]);;
