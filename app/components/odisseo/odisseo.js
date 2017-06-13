(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/odisseo/odisseo.html'
  }
  angular.module("Practica")
    .component("odisseoComponent", component)
    function componentCtrl(){
      var com = this;
      com.song= "Dias de Fuego"
      com.singer = "Odisseo"


    }
})();
