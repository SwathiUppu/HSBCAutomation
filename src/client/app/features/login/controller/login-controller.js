'use strict';

(function (angular) {

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$stateParams', '$state'];

  function LoginController($stateParams, $state) {
    var vm = this;
	if($stateParams.registered) {
      vm.registered = true;
	}
    vm.login = function() {
      vm.submitted = true;
	if(vm.user.username != 'user' || vm.user.password != 'user') {
	  vm.loginFailed = true;
	} else {
	  $state.go('personList');
	}
    }
  }

})(angular);
