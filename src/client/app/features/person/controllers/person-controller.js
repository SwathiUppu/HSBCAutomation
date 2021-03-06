'use strict';

(function (angular) {

  angular
    .module('app.person')
    .controller('PersonController', PersonController);

  PersonController.$inject = ['$stateParams', '$filter', '$timeout', 'person', 'clipboard', 'ngToast'];

  function PersonController($stateParams, $filter, $timeout, person, clipboard, ngToast) {
    var vm = this;
    var pages = 0;
    var i;
    vm.filteredPeople = [];
    vm.sortReverse = false;
    vm.orderByField = 'firstName';
    vm.reverseSort = false;

    vm.currPage = parseInt($stateParams.page) || 1;

    function createPageArr(response) {
      pages = Math.ceil(response.total / response.size);
      vm.pageArr = [];

      for (i = 1; i <= pages; i++) {
        vm.pageArr.push(i);
      }
    }

    person.getPersons($stateParams.page, $stateParams.size).then(function (response) {
      vm.isBusy = true;
      $timeout(function() {
          vm.isBusy = false;
          vm.persons = response.payload;
          vm.currentPage = 1;
          vm.itemsPerPage = 10;
          vm.totalItems = vm.persons.length;
          createPageArr(response);
        }, 4000);
    });

    vm.delete = function (id) {
      angular.forEach(vm.persons, function(key, value) {
        if(vm.persons[value].id === id) {
          ngToast.create({
            className: 'info',
            content: '<div>' + vm.persons[value].firstName + ' has been deleted!</div>'
          });
          vm.persons.splice( value, 1 );
        }
      });
    };

    vm.filterChanged = function() {
      if(vm.listFilter.length ===0) {
        vm.filteredPeople = [];
      }
    }

  }

})(angular);
