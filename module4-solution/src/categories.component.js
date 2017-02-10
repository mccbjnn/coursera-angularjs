(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('MenuApp')
        .component('categories', {
            templateUrl:'src/templates/categories.template.html',
            bindings: {
                categories: '<',
            },
        });
})();