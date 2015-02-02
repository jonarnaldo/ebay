(function() {

  angular
  .module('app.list')
  .factory('ListFactory', ListFactory);

  function ListFactory($http, $q, $timeout){

    var services = {
      getItems: getItems,
    }

    return services;

    function getItems(cb) {
      console.log('getting places...');

      $http.get('/items').success(function(data, status, headers, config) {
        cb(data);
      }).error(function (data, status, headers, config) {
        console.log('Error! ', status);
      })
    }    
    
  }
})();



