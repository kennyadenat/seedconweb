"use strict";

app.controller("ExhibitController", [
  "$scope",
  "$http",
  "$timeout",
  "SweetAlert",
  function ($scope, $http, $timeout, SweetAlert) {
    $scope.mainPage = true;
    $scope.regPage = false;

    $scope.chooseOption = function () {
      $scope.mainPage = false;
      $scope.regPage = true;
    };
  },
]);
