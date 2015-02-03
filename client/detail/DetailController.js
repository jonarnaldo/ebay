(function () {
  'use strict';
  
  angular
  .module('app.detail')
  .controller('DetailController', DetailController);

  DetailController.$inject = ['ListFactory','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http'];

  function DetailController(ListFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http){
    var vm = this;
    vm.items;
    vm.currentItem = null;

    $scope.$watch(function () {
      return ListFactory.item.details;
    }, function(oldVal,newVal) {
      if (typeof newVal !== 'undefined') {
          vm.currentItem = ListFactory.item.details;
      }
    }) 

    // initialize with first item
    vm.init = function() {
      console.log('initializing...')
      ListFactory.getItems(function (data) {
        console.log('loading...');
        vm.currentItem = data[0];
      })
    }

    vm.init();

  }
})();
    

