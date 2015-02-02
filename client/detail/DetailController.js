(function () {
  'use strict';
  
  angular
  .module('app.detail')
  .controller('DetailController', DetailController);

  DetailController.$inject = ['ListFactory','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function DetailController(ListFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    var vm = this;
    vm.items;

    ListFactory.getItems(function (data) {
      vm.items = data;
      console.log(vm.items);
    })

  }
})();
    

