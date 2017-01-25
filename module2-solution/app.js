(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function(itemIndex) {
        console.log("Buy Item Index: " + itemIndex);
        ShoppingListCheckOffService.buyItem(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    var baseItems = [
        {
            name: "cookies",
            quantity: 10
        },
        {
            name: "apples",
            quantity: 5
        },
        {
            name: "oranges",
            quantity: 10
        },
        {
            name: "bottles of milk",
            quantity: 5
        },
        {
            name: "snacks",
            quantity: 10
        }
    ];

    var toBuyItems = baseItems;

    var boughtItems = [];

    service.buyItem = function (itemIndex) {
        console.log("[service]Buy Item Index: " + itemIndex);
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex, 1);
        
        console.log(boughtItems);
    };

    service.getToBuyItems = function() {
        return toBuyItems;
    };

    service.getBoughtItems = function() {
        return boughtItems;
    };
}

})();