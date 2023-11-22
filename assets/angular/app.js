var app = angular.module("Portal", [
  "ngMessages",
  "ngAnimate",
  "oitozero.ngSweetAlert",
]);

app.service("DataService", function () {
  var jsonData = null;

  return {
    setJsonData: function (data) {
      jsonData = data;
    },
    getJsonData: function () {
      return jsonData;
    },
  };
});

app.run(function run() {});
