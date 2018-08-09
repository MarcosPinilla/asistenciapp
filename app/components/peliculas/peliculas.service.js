(function () {
  'use strict';

  angular
  .module('app')
  .service('PeliculasService', peliculasService);

  peliculasService.$inject = ['$resource', 'API'];

  function peliculasService($resource, API) {
    return $resource(API + 'peliculas/:id', {id: '@id'});
  }
})();
