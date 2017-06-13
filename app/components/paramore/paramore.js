(function(){
  'use strict'
  var componentp = {
    controller: componentCtrl,
    templateUrl:'app/components/paramore/paramore.html'
  }
  angular.module("Practica")
    .component("practicaComponentp", componentp)
    function componentCtrl(){
      var com = this;
      com.song= "Brand New Eyes"
      com.singer = "Paramore"

    }
})();
