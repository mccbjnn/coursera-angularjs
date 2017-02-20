(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService', 'ApiPath', 'firstName', 'lastName', 'email', 'phone', 'favDish', 'dish'];
function InfoController(MenuService, ApiPath,firstName, lastName, email, phone, favDish, dish) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;

  if (email === undefined || email.length === 0) {
      $ctrl.showSignUp = true;
  }

  $ctrl.firstName = firstName;
  $ctrl.lastName = lastName;
  $ctrl.email = email;
  $ctrl.phone = phone;
  $ctrl.favDish = favDish;
  $ctrl.dish = dish;
}

})();
