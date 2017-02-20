(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService', 'firstName', 'lastName', 'email', 'phone', 'favDish'];
function InfoController(MenuService, firstName, lastName, email, phone, favDish) {
  var $ctrl = this;
  
  $ctrl.firstName = firstName;
  $ctrl.lastName = lastName;
  $ctrl.email = email;
  $ctrl.phone = phone;
  $ctrl.favDish = favDish;
}

})();
