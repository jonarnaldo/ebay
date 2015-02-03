(function() {

  angular
  .module('app.list')
  .factory('ListFactory', ListFactory);

  function ListFactory($http, $q, $timeout){


    var item = {
      details: null
    }

    var services = {
      getItems: getItems,
      item: item,
      getCurrentSelection: getCurrentSelection,
      setCurrentSelection: setCurrentSelection
    }

    return services;


    function getCurrentSelection() {
      console.log('getting current selection...')
      return item.details;
    }

    function setCurrentSelection(obj) {
      console.log('setCurrentSelection called')
      item.details = obj;
      console.log(item.details);
    }

    function getItems(cb) {
      console.log('getting places...');
      $http.get('https://s3-us-west-2.amazonaws.com/famous-hiring/famousEbayData.json').success(function(data, status, headers, config) {
        cb(data);
      }).error(function (data, status, headers, config) {
        console.log('Error! ', status);
      })
    }    
    
  }
})();



