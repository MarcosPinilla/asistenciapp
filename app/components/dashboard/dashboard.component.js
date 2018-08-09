(function () {
    'use strict';
  
    angular
    .module('app')
    .component('dashboard', {
      templateUrl: 'app/components/dashboard/dashboard.html',
      controller: dashboardCtrl,
      controllerAs: 'vm'
    });
  
    dashboardCtrl.$inject = ['AsignaturaService'];
  
    function dashboardCtrl(AsignaturaService) {
      var vm = this;

      vm.asignaturas = {};

      AsignaturaService.query().$promise.then(function (data) {
        vm.asignaturas = data;
        console.log(vm.asignaturas);
      });
  
    }
  })();
  