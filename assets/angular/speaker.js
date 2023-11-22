"use strict";

app.controller("SpeakerController", [
  "$scope",
  "$http",
  "$timeout",
  "SweetAlert",
  function ($scope, $http, $timeout, SweetAlert) {
    $scope.speakerList = [
      {
        id: "1",
        title: "Dr",
        firstname: "Mohammaed",
        lastname: "Kyari",
        position: "Hon Minister, FMAFS",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/kyari.jpg",
      },
      {
        id: "2",
        title: "Dr",
        firstname: "Aliyu",
        lastname: "Sabi Abdullahi",
        position: "Hon Minister of State, FMAFS",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/aliyu.jpg",
      },
      {
        id: "3",
        title: "Dr",
        firstname: "Ernest Afolabi",
        lastname: "Umakhihe",
        position: "Permanent Sec, FMAFS",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/ernest.jpg",
      },
      {
        id: "4",
        title: "Dr",
        firstname: "Ishiak",
        lastname: "Khalid",
        position: "Ag. Director General, NASC",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/khalid.jpg",
      },
      {
        id: "4",
        title: "Mr",
        firstname: "Lateef",
        lastname: "Towolawi",
        position: "Director SIDM&CB, NASC",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/towolawi.jpg",
      },
      {
        id: "4",
        title: "Mr",
        firstname: "Ebiarede",
        lastname: "Zidafamor",
        position: "Director SIDM&CB, NASC",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/zidafamor.jpg",
      },
      {
        id: "4",
        title: "Mr",
        firstname: "Aliyu",
        lastname: "Idris",
        position: "Director Finance & Accounts, NASC",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/aliyu_2.jpg",
      },
      {
        id: "4",
        title: "Mallam",
        firstname: "Dahiru",
        lastname: "Rabiu",
        position: "Director DG's Office, NASC",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/dahiru.jpg",
      },
      {
        id: "4",
        title: "Dr",
        firstname: "Olusola",
        lastname: "Oginni",
        position: "Director Finance & Accounts, NASC",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/oginni.jpg",
      },
    ];

    $scope.viewProfile = function (id) {
      const encodedName = encodeURIComponent(id);
      window.location.href = `profile.html?id=${encodedName}`;
    };
  },
]);
