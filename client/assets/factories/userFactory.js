app.factory('userFactory', ['$http', function($http) {
  var factory = {};
  factory.login = function(userData, callback) {
    $http.post('/users', userData).then(function(returned_data) {
      if (typeof(callback == 'function')) {
        callback(returned_data.data)
      }
    })
  };
  return factory;
}]);;
