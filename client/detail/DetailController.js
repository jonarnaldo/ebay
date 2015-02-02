(function () {
  'use strict';
  
  angular
  .module('app.detail')
  .controller('DetailController', DetailController);

  DetailController.$inject = ['ListFactory','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function DetailController(ListFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    var vm = this;
    vm.items;
    vm.currentItem;

    ListFactory.getItems(function (data) {
      vm.items = data;
    })


    $scope.$watch('vm.currentItem', function() {
       console.log('hey, myVar has changed!');
       console.log(ListFactory.getCurrentSelection());
    });

    vm.getCurrentSelection = function() {
      vm.currentItem = ListFactory.getCurrentSelection();
      console.log(vm.currentItem);
    }


  }
})();
    

