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
    ctrl.isClicked = false;

    ctrl.findItems = function() {
        if (ctrl.searchTerm !== undefined && ctrl.searchTerm != '') {
            var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
            promise.then(function(result){
                ctrl.found = result;      
            });
        }
        else {
            ctrl.found = [];
        }
        ctrl.isClicked = true;
        console.log("Found Items After Search: " + ctrl.found.length);
        console.log("isClicked: " + ctrl.isClicked);
    }

    ctrl.removeItem = function(itemIndex) {
        ctrl.found.splice(itemIndex, 1);
        console.log("After delete: " + ctrl.found.length);
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
            angular.forEach(allItems, function (value, key) {
                //console.log("Item.description: " + value.description);
                var description = value.description;
                if (description.indexOf(searchTerm) !== -1) {
                    foundItems.push(value);
                }
            })
            console.log("Found Items: " + foundItems.length);
            return foundItems;
        });
    };
}

function FoundItemsDirective() {
    var ddo = {
        restrict: 'E',
        templateUrl: 'foundItems.html',
        scope: {
            foundItems: '<',
            onRemove: '&',
            isClicked: '@isClicked'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'ctrl',
        bindToController: true
    }
    return ddo;
}

function FoundItemsDirectiveController() {
    var ctrl = this;
    console.log("test: " + ctrl.foundItems.length);
}
})();