;(function () {
'use strict'

angular
  .module('app.core')
  .config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $stateProvider
    
    .state('items', {
      abstract: true,
      url: '/',
      views: {
        'main' : {
          templateUrl: '/partials/items.html'
        }
      }
    })
    .state('items.subs',{
      url: '',
      views: {
        'list@items': {
          templateUrl: '/list/list.html',
          controller: 'ListController as vm'
        },
        'detail@items': {
          templateUrl: '/detail/detail.html',
          controller: 'DetailController as vm',
        }
      }
    })

    $locationProvider.html5Mode(true)
  }

}).call(this);