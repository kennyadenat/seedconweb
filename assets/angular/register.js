"use strict";

app.controller("RegisterController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.message = "";
    $scope.url = "http://localhost:3300/api/v0001/participant/addparticipant";

    $scope.Registration = {
      title: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      organization: "",
      sex: "",
      specialization: "",
      attendance: "",
      aware: "",
      submit: "submit",
    };

    $scope.resetForm = function () {
      $scope.Registration = {
        title: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        country: "",
        organization: "",
        sex: "",
        specialization: "",
        attendance: "",
        aware: "",
        submit: "submit",
      };
    };

    $scope.sexes = ["female", "male"];

    $scope.addNewRegistration = function () {
      console.log("titles", $scope.Registration);
      $scope.Registration.submit = "process";

      $http.post($scope.url, $scope.Registration).then(function (msg) {
        $scope.message = msg.data.participants;

        if ($scope.message.status === "true") {
          $scope.resetForm();
          $scope.Registration.sex = "";
        } else {
          console.log("User account already exists");
        }
      });
    };
  },
]);
