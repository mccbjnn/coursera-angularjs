(function() {
'use strict';

    angular
        .module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");;

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function() {
                console.log("begin get category data");
            var categories = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function (response) {
                return response.data;
            });
            return categories;
        };

        service.getItemsForCategory = function (categoryShortName) {
            console.log("Begin get menu items for category: " + categoryShortName);
            var data = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            }).then(function (response) {
                return response.data;
            });
            //console.log("response: " + response);
            return data;
        };
    }
})();