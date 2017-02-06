(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('APIPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.found = [];

    ctrl.findItems = function() {
        /*var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        promise.then(function(result){
            ctrl.found = result;
        });*/
        ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    }

    ctrl.removeItem = function(itemIndex) {
        ctrl.found.splice(itemIndex, 1);
    }
}

MenuSearchService.$inject = ['$http', 'APIPath'];

function MenuSearchService($http, APIPath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: "GET",
            url: APIPath
        }).then(function (result) {
            var foundItems = [];
            var allItems = result.data.menu_items;
            //console.log("Number of all items: " + allItems.length());
            // console.log("All Items: " + allItems);
            // console.log(result);
            angular.forEach(allItems, function (value, key) {
                //console.log("Item.description: " + value.description);
                var description = value.description;
                if (description.indexOf(searchTerm) !== -1) {
                    foundItems.push(value);
                }
            })
            console.log("Found Items: " + foundItems.length);
            console.log("Found items: " + foundItems[1].description);
            return foundItems;
        }), function (response) {
            console.log('Error: ' + response);
        };
    };
}

function FoundItemsDirective() {
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
            foundItems: '<',
            onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'ctrl',
        bindToController: true
    }
    return ddo;
}

function FoundItemsDirectiveController() {
    var ctrl = this;
    console.log("test: " + ctrl.foundItems);
}

//controller: FoundItemsDirectiveController,
// controllerAs: 'list',
})();