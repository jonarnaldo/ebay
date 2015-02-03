(function () {
  'use strict';
  
  angular
  .module('app.list')
  .controller('ListController', ListController);

  ListController.$inject = ['ListFactory','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http','$window'];


  function ListController(ListFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http, $window){
    var vm = this;
    vm.items= [];

    $scope.predicate = 'sellingStatus[0].currentPrice[0].__value__';

    ListFactory.getItems(function (data) {
      vm.items = data;
    })
    // sets current selection on click
    vm.setSelection = function(item) {
      ListFactory.setCurrentSelection(item)
    }
  }
})();
    

