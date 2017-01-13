'use strict';

(function (angular) {

  angular
    .module('app.serviceModule')
    .factory('miscFactory', miscFactory);

  miscFactory.$inject = ['$http'];

  function miscFactory($http) {

    function getComponents() {
        return $http
            .get('/api/components')
            .then(function (response) {
                return response.data;
            });
    }

    function getCountries() {
        return $http
            .get('/api/countries')
            .then(function (response) {
                return response.data;
            });
    }


    return {
        getComponents: getComponents,
        getCountries: getCountries
    };
  }

})(angular);