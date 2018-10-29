(function(){
  'use strict'

  var componentPate = {
    controller: pateCtrl,
    templateUrl: 'app/components/pate/pate.html'
  }

  angular
    .module("Practica")
    .component("pateComponent", componentPate)
  function pateCtrl(){

      var pate = this;

      pate.check = function(){
        var obj = {
          nombre: pate.nombre,
          apellido: pate.apellido,
          direccion: pate.direccion,
          servicio: pate.servicio,
        }
        console.log("XD",obj)
      }
  }
})();
