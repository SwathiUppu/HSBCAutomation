'use strict';

(function (angular) {

  angular
    .module('app.carouselModule')
    .directive('carouselTemplate', carouselDirective);

  function carouselDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/blocks/carousel/template/carousel-template.html',
      bindToController: true,
      controllerAs: 'vm',
      controller: carouselController
    };

    function carouselController () {
      this.slides = [{'image':'app/images/img1.jpg', 'text':'Angular Image1', 'id':0},
      {'image':'app/images/img2.jpg', 'text':'Angular Image2', 'id':1},
      {'image':'app/images/img3.jpg', 'text':'Angular Image3', 'id':2},
      {'image':'app/images/img4.jpg', 'text':'Angular Image4', 'id':3}]
    }
  }

})(angular);