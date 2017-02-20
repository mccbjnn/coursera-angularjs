(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', '$http', 'ApiPath', '$q'];
function SignUpController(MenuService, $http, ApiPath, $q) {
  var $ctrl = this;

  $ctrl.setSignUpInfo = function () {   
      /*var dish = $http.get(ApiPath + '/menu_items/' + $ctrl.favDish + ".json")
                        .then(function (response) {
                          var data = response.data;
                          if (data.status === 500)  return '';
                          console.log ("data: " + data);
                          return data;
                        }).catch(function(response) {
                          if (response.status === 500) {
                            return '';
                          }
                        });*/
      var dish = $http.get(ApiPath + '/menu_items/' + $ctrl.favDish + ".json")
                        .then(function (response) {
                          $ctrl.downloaded = true;
                          return response.data;
                        }, function (response) {
                          $ctrl.downloaded = false;
                          $q.reject(response);
                        });
      MenuService.setSignUpInfo($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phone, $ctrl.favDish, dish);
  };
}

})();
