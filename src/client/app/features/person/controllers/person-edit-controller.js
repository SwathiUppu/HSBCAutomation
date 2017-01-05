'use strict';

(function (angular) {

  angular
    .module('app.person')
    .controller('PersonEditController', PersonEditController);

  PersonEditController.$inject = ['$state', '$stateParams', 'person'];

  function PersonEditController($state, $stateParams, person) {
    var vm = this;

    

    vm.save = function (e) {
      e.preventDefault();
      person.updatePerson(vm.person).then(function () {
        $state.go('personView', {id: vm.person._id});
      });
    };
	
	vm.reset = function (e) {
      person.getPersonById($stateParams.id).then(function (response) {
        vm.person = response.payload;
      });;
    };

    //flow

    if ($stateParams.id !== '-1') {
      person.getPersonById($stateParams.id).then(function (response) {
        vm.person = response.payload;
      });
    } else {
      vm.person = {
        _id: -1
      };
    }
  }

})(angular);
