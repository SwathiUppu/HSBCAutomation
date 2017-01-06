'use strict';

(function (angular) {

  angular
    .module('app.person')
    .controller('PersonController', PersonController);

  PersonController.$inject = ['$stateParams', 'person', 'clipboard', 'ngToast'];

  function PersonController($stateParams, person, clipboard, ngToast) {
    var vm = this;
    vm.sortReverse = false;
    vm.orderByField = 'firstName';
    vm.reverseSort = false;

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
	
	vm.delete = function (id) {
      angular.forEach(vm.persons,function(key, value) {
        if(vm.persons[value].id === id) {
		  vm.persons.splice( value, 1 );
		  ngToast.create({
            className: 'info',
            content: '<div>User has been deleted!</div>'
          });
		}
	  });
    };

  }

})(angular);
