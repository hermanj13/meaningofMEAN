app.factory('listFactory', ['$http', function($http) {
  var factory = {};
  factory.getUserList = function(callback) {
    $http.get('/lists').then(function(returned_data) {
      if (typeof(callback) == 'function') {
        callback(returned_data.data);
      };
    })
  }
  factory.getAllUser = function(userID, callback) {
    $http.get('/users/' + userID).then(function(returned_data) {
      if (typeof(callback) == 'function') {
        callback(returned_data.data);
      };
    })
  }
  factory.getSingleUser = function(userID, callback) {
    $http.get('/users/single/' + userID).then(function(returned_data) {
      if (typeof(callback) == 'function') {
        callback(returned_data.data);
      };
    })
  }
  factory.createList = function(listData, callback) {
    $http.post('/lists', listData).then(function(returned_data) {
      if (typeof(callback) == 'function') {
        callback(returned_data.data);
      };
    })
  }
  factory.updateCompletion = function(listID, callback) {
    $http.put('/lists/' + listID).then(function(returned_data) {
      if (typeof(callback) == 'function') {
        callback(returned_data.data);
      };
    })
  }
  return factory;
}]);
