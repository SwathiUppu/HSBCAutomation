'use strict';

(function (angular) {

  angular
    .module('app.person')
    .controller('PersonController', PersonController);

  PersonController.$inject = ['$stateParams', 'person', 'clipboard'];

  function PersonController($stateParams, person, clipboard) {
    var vm = this;

    vm.clipboard = clipboard;

    vm.currPage = parseInt($stateParams.page) || 1;

    function createPageArr(response) {
      var pages = Math.ceil(response.total / response.size);
      vm.pageArr = [];

      for (var i = 1; i <= pages; i++) {
        vm.pageArr.push(i);
      }
    }

    person.getPersons($stateParams.page, $stateParams.size).then(function (response) {
      vm.persons = response.payload;
      createPageArr(response);
    });

  }

})(angular);
