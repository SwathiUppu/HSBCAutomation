'use strict';

(function (angular) {

  angular
    .module('app.person')
    .controller('PersonEditController', PersonEditController);

  PersonEditController.$inject = ['$state', '$stateParams', '$timeout', 'person'];

  function PersonEditController($state, $stateParams, $timeout, person) {
    var vm = this;

    vm.save = function (e) {
      e.preventDefault();
      $state.go('personView', {id: vm.person.id});
      /*person.updatePerson(vm.person).then(function () {
        $state.go('personView', {id: vm.person.id});
      });*/
    };

    vm.reset = function () {
      person.getPersonById($stateParams.id).then(function (response) {
        vm.person = response.payload;
      });
    };

    //flow

    if ($stateParams.id !== '-1') {
      person.getPersonById($stateParams.id).then(function (response) {
        vm.isBusy = true;
        $timeout(function() {
          vm.isBusy = false;
          vm.person = response.payload;
        }, 4000);
      });
    } else {
      vm.person = {
        _id: -1
      };
    }
  }

})(angular);
