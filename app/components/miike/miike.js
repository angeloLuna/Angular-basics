(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl:'app/components/miike/miike.html'
  }
  angular.module("Practica")
    .component("miikeComponent", component)
    function componentCtrl(){
      var com = this;
      com.song= "Miike Snow"
      com.singer = "Miike Snow"


    }
})();
