(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;
  $ctrl.downloaded = false;

  $ctrl.setSignUpInfo = function () {
      $ctrl.downloaded = MenuService.setSignUpInfo($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phone, $ctrl.favDish);
  }
}

})();
