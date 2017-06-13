(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/metronomy/metronomy.html'
  }
  angular.module("Practica")
    .component("metronomyComponent", component)
    function componentCtrl(){
      var com = this;
      com.song= "The English Riviera"
      com.singer = "Metronomy"


    }
})();
