(function () {
  'use strict';

  angular
  .module('app')
  .component('peliculas', {
    templateUrl: 'app/components/peliculas/peliculas.html',
    controller: peliculasCtrl,
    controllerAs: 'vm'
  });

  peliculasCtrl.$inject = ['PeliculasService'];

  function peliculasCtrl(PeliculasService) {
    var vm = this;

    vm.peliculas = [];

    PeliculasService.query().$promise.then(function (data) {
      vm.peliculas = data;
    });
  }
})();
