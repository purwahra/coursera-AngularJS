(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/categories',
    templateUrl: 'templates/main-categorieslist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }

  })// Item detail
  .state('itemDetail', {
    url: '/items/{itemId}',
    templateUrl: 'templates/main-itemslist.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }

  });


}

})();
