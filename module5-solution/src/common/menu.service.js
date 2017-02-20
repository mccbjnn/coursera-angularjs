(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.firstName = '';
  service.lastName = '';
  service.email = '';
  service.phone = '';
  service.favDish = '';

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.setSignUpInfo = function (firstName, lastName, email, phone, favDish, dish) {
    service.firstName = firstName;
    service.lastName = lastName;
    service.email = email;
    service.phone = phone;
    service.favDish = favDish;
    service.dish = dish;
  };

}



})();
