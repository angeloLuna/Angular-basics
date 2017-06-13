(function(){
  'use strict'
  var component = {
    controller: componentCtrl,
    templateUrl: 'app/components/muse/absolution.html'
  }
  angular
    .module("Practica")
    .component("practicaAbsolution", component)
  function componentCtrl(){
    var com = this;
    com.variable= '1'

    com.array = [
    {
      cancion: "Intro",
      duracion: "22 seg",
      pag: "1",
      id: "1"
    },
    {
      cancion: "Apocalypse Please",
      duracion: "4.23 min",
      pag: "1",
      id: "2"
    },
    {
      cancion: "Time Is Running Out",
      duracion: "3.58 min",
      pag: "1",
      id: "3"
    },
    {
      cancion: "Sing For Absolution",
      duracion: "4.54 min",
      pag: "1",
      id: "4"
    },
    {
      cancion: "Stockholm Syndrome",
      duracion: "4.57 min",
      pag: "1",
      id: "5"
    },
    {
      cancion: "Falling Away with You",
      duracion: "4.40 min",
      pag: "2",
      id: "6"
    },
    {
      cancion: "Interlude",
      duracion: "0.37 seg",
      pag: "2",
      id: "7"
    },
    {
      cancion: "Hysteria",
      duracion: "3.47 min",
      pag: "2",
      id: "8"
    },
    {
      cancion: "Blackout",
      duracion: "4.22 min",
      pag: "2",
      id: "9"
    },
    {
      cancion: "Butterflies and Hurricanes",
      duracion: "5.10 min",
      pag: "2",
      id: "10"
    },
    {
      cancion: "The Small Print",
      duracion: "3.29 min",
      pag: "3",
      id: "11"
    },
    {
      cancion: "Endlessly",
      duracion: "	3.48 min",
      pag: "3",
      id: "12"
    },
    {
      cancion: "Thoughts of A Dying Atheist",
      duracion: "3.70 min",
      pag: "3",
      id: "13"
    },
    {
      cancion: "Ruled by Secrecy",
      duracion: "4.52 min",
      pag: "3",
      id: "14"
    },
    {
      cancion: "Fury",
      duracion: "5.0 min",
      pag: "3",
      id: "15"
    }

    ]

  }
})();
