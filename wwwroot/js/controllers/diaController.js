var dApp = angular.module('dApp', []);
dApp.controller("diaController", function ($scope) {

    $scope.class = "";

    $scope.cardClick = function () {
        if ($scope.class === "")
            $scope.class = "rotate";
        else
            $scope.class = "";
    };
});