var app = angular.module('app', []);
app.controller('ctrl', function($scope, $http) {

  var xurl = 'https://uk.bookingbug.com/api/v1/41285/services?page=1&per_page=300';
  var xheaders = {
    "App-Id": '5a3d8b8d',
    "App-Key": '738e9aca62e7465446b7be8fe4219ffa'
  };
  var configObj = {
    method: 'GET',
    url: xurl,
    headers: xheaders
  };

  $http(configObj)
    .then(function onFulfilled(response) {
    console.log(response);
    $scope.headers = response.config.headers;
    $scope.status = response.status;
    $scope.numberServices = response.data._embedded.services.length;
  }).catch(function onRejection(errorResponse) {
    console.log("Error: ", errorResponse.status);
    console.log(errorResponse);
    $scope.error = errorResponse;
  });
});