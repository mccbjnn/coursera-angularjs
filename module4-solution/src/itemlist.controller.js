(function() {
'use strict';

    angular
        .module('MenuApp')
        .controller('ItemListController', ItemListController);

    ItemListController.$inject = ['data'];
    function ItemListController(data) {
        var itemList = this;
        itemList.items = data.menu_items;
        itemList.category = data.category;
    }
})();