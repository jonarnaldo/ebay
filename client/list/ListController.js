(function () {
  'use strict';
  
  angular
  .module('app.list')
  .controller('ListController', ListController);

  ListController.$inject = ['ListFactory','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function ListController(ListFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    var vm = this;
    vm.items;

    ListFactory.getItems(function (data) {
      vm.items = data;
      console.log(vm.items);
    })

  }
})();
    

