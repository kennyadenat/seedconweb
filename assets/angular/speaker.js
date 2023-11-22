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
        firstname: "Ishiak",
        lastname: "Khalid",
        position: "Acting DG, NASC",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/khalid.jpg",
      },
      {
        id: "3",
        title: "Dr",
        firstname: "Mohammaed",
        lastname: "Kyari",
        position: "Hon Minister, FMAFS",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/kyari.jpg",
      },
      {
        id: "4",
        title: "Dr",
        firstname: "Ishiak",
        lastname: "Khalid",
        position: "Acting DG, NASC",
        bio: "national agricultural seeds council",
        image: "assets/img/speaker/khalid.jpg",
      },
    ];

    $scope.viewProfile = function (id) {
      const encodedName = encodeURIComponent(id);
      window.location.href = `profile.html?id=${encodedName}`;
    };
  },
]);
