(function() {
    'use strict';

    angular.module('MenuApp')     
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })

        .state('categories', {
            url: '/categories',
            controller: 'CategoryListController as categoryList',
            templateUrl: 'src/templates/categories.template.html',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('items', {
            url: '/items/{catShortName}',
            templateUrl: 'src/templates/items.template.html',
            controller: "ItemListController as itemList",
            resolve: {
                data: ['$stateParams', 'MenuDataService',
                    function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.catShortName);
                    }
                ]
            }
        });
    }

})();