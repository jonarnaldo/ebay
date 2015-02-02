(function() {

  angular
  .module('app.list')
  .factory('ListFactory', ListFactory);

  function ListFactory($http, $q, $timeout){

    var currentSelection;

    var services = {
      getItems: getItems,
      getCurrentSelection: getCurrentSelection,
      setCurrentSelection: setCurrentSelection
    }

    return services;

    function getCurrentSelection() {
      console.log('getting current selection...')
      return currentSelection;
    }

    function setCurrentSelection(obj) {
      currentSelection = obj;
      console.log('currentSelection: ', obj);
    }

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



