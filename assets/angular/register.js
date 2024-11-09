"use strict";

app.controller("RegisterController", [
  "$scope",
  "$http",
  "$timeout",
  "SweetAlert",
  "DataService",
  function ($scope, $http, $timeout, SweetAlert, DataService) {
    var jsonData = DataService.getJsonData();

    console.log(jsonData);

    $scope.message = "";
    $scope.url = "http://localhost:3300/api/v0001/participant/addparticipant";
    // $scope.url = "https://eventserver.onrender.com/api/v0001/participant/addparticipant";

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
      $scope.Registration.submit = "process";
      if ($scope.addRegistration.$invalid) {
      } else {
        $scope.error = "";
        const currentYear = new Date().getFullYear().toString();
        $scope.Registration.year = currentYear;

        $http
          .post($scope.url, $scope.Registration)
          .then(function (response) {
            // Success: Handle the response data here
            $scope.message = response.data.participants;
            if ($scope.message.status === "true") {
              const encodedName = encodeURIComponent($scope.message.name);
              window.location.href = `success.html?name=${encodedName}`;
            } else {
              $scope.Registration.submit = "submit";
              $scope.error = $scope.message.message;
            }
          })
          .catch(function (error) {
            $scope.Registration.submit = "submit";
            // Error: Handle the 400 Bad Request response here
            if (error.status === 400) {
              SweetAlert.swal("Error Message", error.data.message, "error");
            } else {
              // Handle other types of errors here, if necessary.
              SweetAlert.swal(
                "Error Message",
                "Can't process your request at this time. We sincerely apologize for this. Please try again and if this persist, please kindly reach out to our team. Thanks!",
                "error"
              );
            }
          });
      }
    };
  },
]);
