(function () {
  'use strict';
  
  angular
  .module('app.list')
  .controller('ListController', ListController);

  ListController.$inject = ['ListFactory','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  var vm = this;

  function ListController(ListFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    var vm = this;
    vm.items;

    ListFactory.getItems(function (data) {
      vm.items = data;
    })

    // sets current selection on click
    vm.setSelection = function(item) {
      ListFactory.setCurrentSelection(item)
      $rootScope.$broadcast('update:Selection',item);
    }

  }
})();
    

