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

    vm.test = 0

    ListFactory.getItems(function (data) {
      vm.items = data;
    })

    $scope.$on('update:Selection', function(event,selection) {
      console.log('broadcast: ',selection);
      vm.currentItem = selection;
      console.log('vm.currentItem: ',vm.currentItem);
    });


  }
})();
    

