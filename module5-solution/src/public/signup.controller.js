(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;
  
  $ctrl.setSignUpInfo = function () {
      MenuService.setSignUpInfo($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phone, $ctrl.favDish);
      console.log($ctrl.firstName);
  }
}

})();
