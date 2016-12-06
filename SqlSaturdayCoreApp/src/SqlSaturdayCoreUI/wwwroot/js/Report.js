// module
var reportApp = angular.module('reportApp', ['powerbi']);

// controller
reportApp.controller('reportController', ['$scope','powerbi',function ($scope, powerbi) {
    $scope.firstName = "Mary";
    $scope.lastName = "Jane"
}]);