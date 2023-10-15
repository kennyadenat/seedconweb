"use strict";

app.controller("SuccessController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get("name");

    $scope.name = toTitleCase(name);

    if (name) {
      // Use the parameter value as needed
      console.log("Received name:", decodeURIComponent(name));
    } else {
      window.location.href = `index.html`;
    }

    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  },
]);
