(function() {
'use strict';

    angular
        .module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");;

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function() {
                console.log("begin get category data");
                var categories = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function (response) {
                categories = response.data;
                console.log("Cateogries: ", categories);
            });

            return categories;
        };

        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            });

            return response;
        };
    }
})();