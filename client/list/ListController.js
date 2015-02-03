(function () {
  'use strict';
  
  angular
  .module('app.list')
  .controller('ListController', ListController);

  ListController.$inject = ['ListFactory','$scope', '$rootScope', '$stateParams', '$q', '$timeout', '$http','$window'];


  function ListController(ListFactory, $scope, $rootScope, $stateParams, $q, $timeout, $http, $window){
    var vm = this;
    vm.items= [];

    var parentScope = $window.parent.angular.element($window.frameElement).scope();
    console.log('parentScope',parentScope);

    ListFactory.getItems(function (data) {
      angular.forEach(data, function(item, index) {
        $timeout(function() {
          vm.items.push(item)
        }, index * 60);
      })
    })
    // sets current selection on click
    vm.setSelection = function(item) {
      ListFactory.setCurrentSelection(item)
    }
  }
})();
    

