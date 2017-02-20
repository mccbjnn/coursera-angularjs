(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/signup.html',
      controller: 'SignUpController',
      controllerAs: 'signupCtrl'
    })
    .state('public.info', {
      url: '/info',
      templateUrl: 'src/public/info.html',
      controller: 'InfoController',
      controllerAs: 'infoCtrl',
      resolve: {
        firstName: ['MenuService', function(MenuService){
          return MenuService.firstName;
        }],
        lastName: ['MenuService', function(MenuService){
          return MenuService.lastName;
        }],
        email: ['MenuService', function(MenuService){
          return MenuService.email;
        }],
        phone: ['MenuService', function(MenuService){
          return MenuService.phone;
        }],
        favDish: ['MenuService', function(MenuService){
          return MenuService.favDish;
        }],
      }
    });
}
})();
