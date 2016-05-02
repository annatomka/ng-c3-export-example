(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1462098320533;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }



  angular
    .module('test').controller("DynamicPieChartController", function ($timeout) {

    var chart = c3.generate({
      bindto: "#my-pie-chart",
      data: {
        type: 'pie',
        columns: [
          ['sample', 30],
          ['sample2', 200]
        ]
      }
    });

    $timeout(function () {
      chart.load({
        columns:[
          ['sample', 30,10,12],
          ['sample2',10,12,31]
        ],
        type: 'bar'
      });
    },5000);

  });
})();
