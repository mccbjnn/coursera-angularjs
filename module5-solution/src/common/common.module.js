(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://still-woodland-52469.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
