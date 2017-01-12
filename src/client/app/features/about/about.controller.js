'use strict';

(function () {

  angular.module('app.about').controller('AboutCtrl', AboutCtrl);

  AboutCtrl.$inject = ['$window', 'ngDialog'];

  function AboutCtrl ($window, ngDialog) {
    var vm = this;

    vm.technologies = ['GulpJs', 'AngularJs'];
      vm.show = function(technology){
        if(technology === 'GulpJs') {
          vm.selectedTechnology = 'gulp';
        } else {
            vm.selectedTechnology = 'angular';
          }
       ngDialog.openConfirm({
         template:
            '<div class="ngdialog-message"><h2 class="confirmation-title">Documentation <span class="glyphicon glyphicon-book"></span></h2><span>Please click on Ok to redirect to ' + vm.selectedTechnology + ' documentation</span>' +
            '<div class="ngdialog-buttons">' +
            '<button type="button" class="ngdialog-button" ng-click="closeThisDialog(0)">No&nbsp;' +
            '<button type="button" class="ngdialog-button" ng-click="confirm()">Yes' +
            '</button></div></div>',
            plain: true,
            className: 'ngdialog-theme-default'
        }).then(function () {
             vm.confirm();
             }, function () {});
        }

    vm.confirm = function(){
      if(vm.selectedTechnology === 'gulp'){
        $window.open('http://gulpjs.com/', '_blank');
      } else {
          $window.open('https://angularjs.org/', '_blank');
        }
    }
  }

})();
