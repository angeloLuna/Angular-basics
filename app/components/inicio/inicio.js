(function(){
  'use strict'

  var inicio = {
    controller: inicioCtrl,
    templateUrl: "app/components/inicio/inicio.html"
  }

  angular
    .module("Practica")
    .component("componenteInicio", inicio)

  function inicioCtrl(){

    var inicio = this;

  }
})()
