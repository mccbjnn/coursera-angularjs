(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('MenuApp')
        .component('items', {
            templateUrl: 'src/templates/items.template.html',
            bindings: {
                items: '<',
            },
        });
})();