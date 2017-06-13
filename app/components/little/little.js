(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/little/little.html'
  }
  angular.module("Practica")
    .component("littleComponent", component)
    function componentCtrl(){
      var com = this;
      com.song= "Rio Salvaje"
      com.singer = "Little Jesus"


    }
})();
