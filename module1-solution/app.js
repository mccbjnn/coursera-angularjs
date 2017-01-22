(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    var separator = ',';
    $scope.checkLunch = function() {
        console.log($scope.lunchMenu);
        if ($scope.lunchMenu === undefined ||  $scope.lunchMenu.length === 0) {
            $scope.message = "Please enter data first";
            $scope.borderColor = "border-red";
            $scope.textColor = "text-red";
        }
        else {
            var arrayOfLunch = $scope.lunchMenu.split(separator);
            var total = totalElement(arrayOfLunch);
            console.log(total);
            $scope.message = total > 3 ? "Too much!" : "Enjoy!";
            $scope.borderColor = "border-green";
            $scope.textColor = "text-green";
        }
    };
}

function totalElement (input) {
    var total = 0;
    input.forEach(function(element) {
        if (element.trim().length > 0) {
            total++;
        }
    }, null);
    return total;
}


})();