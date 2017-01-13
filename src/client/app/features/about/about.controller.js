'use strict';

(function () {

  angular.module('app.about').controller('AboutCtrl', AboutCtrl);

  AboutCtrl.$inject = ['$window', 'ngDialog', 'miscFactory'];

  function AboutCtrl ($window, ngDialog, miscFactory) {
    var vm = this;

    miscFactory.getComponents().then(function (response) {
      vm.technologies = response.payload;
    });

      vm.show = function(technology){
       vm.selectedTechnology = technology;
       ngDialog.openConfirm({
         template:
            '<div class="ngdialog-message"><h2 class="confirmation-title">Documentation <span class="glyphicon glyphicon-book"></span></h2><span>Please click on Ok to redirect to ' + technology.alias + ' documentation</span>' +
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
      $window.open(vm.selectedTechnology.url, '_blank');
    }
  }

})();
