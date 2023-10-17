"use strict";

app.controller("RegisterController", [
  "$scope",
  "$http",
  "toastr",
  function ($scope, $http, toastr) {
    $scope.message = "";
    // $scope.url = "http://localhost:3300/api/v0001/participant/addparticipant";
    $scope.url =
      "https://eventserver.onrender.com/api/v0001/participant/addparticipant";

    $scope.error = "";

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
      year: "",
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
        year: "",
        submit: "submit",
      };
    };

    $scope.sexes = ["female", "male"];

    $scope.addNewRegistration = function () {
      if ($scope.addRegistration.$invalid) {
      } else {
        $scope.error = "";
        const currentYear = new Date().getFullYear().toString();
        $scope.Registration.year = currentYear;
        $scope.Registration.submit = "process";

        $http.post($scope.url, $scope.Registration).then(function (msg) {
          $scope.message = msg.data.participants;
          if ($scope.message.status === "true") {
            const encodedName = encodeURIComponent($scope.message.name); // Encode the parameter for URL
            // Navigate to another page with the parameter in the query string
            window.location.href = `success.html?name=${encodedName}`;
          } else {
            $scope.Registration.submit = "submit";
            console.log("User account already exists");
            toastr.info("User account already exists");
            $scope.error = $scope.message.message;
          }
        });
      }
    };
  },
]);
