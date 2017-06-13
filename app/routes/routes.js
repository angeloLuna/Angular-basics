(function(){
  'use strict'

  angular
    .module("Practica")
    .config(config)

  function config($routeProvider){
    $routeProvider
      .when('/sugerencias',{
        template: '<componente-inicio></componente-inicio>'
      })
      .when('/pate',{
        template: '<pate-component></pate-component>'
      })
      .otherwise({ redirectTo: '/' })
      .when('/paramore',{
      template: "<practica-componentp></practica-componentp>"
    })
      .when('/muse',{
      template: '<practica-component></practica-component>'
    })
      .when('/absolution',{
      template: "<practica-absolution></practica-absolution>"
    })
    .when('/little',{
    template: "<little-component></little-component>"
  })

  }

})();
