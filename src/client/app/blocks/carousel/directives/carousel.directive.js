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
      this.slides = [{"image":"app/images/img1.jpg","text":"Nice image","id":0},
	  {"image":"app/images/img2.jpg","text":"Awesome photograph","id":1},
	  {"image":"app/images/img3.jpg","text":"That is so cool","id":2},
	  {"image":"app/images/img4.jpg","text":"I love that","id":3}]
    }
  }

})(angular);