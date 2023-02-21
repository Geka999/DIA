var dApp = angular.module('dApp', []);
dApp.controller("diaController", function ($scope) {

    $scope.class = "";
    $scope.cardPropertyHeight = {};
    $scope.cardPropertyHeight.height = 0;

    $scope.cardClick = function () {
        if ($scope.class === "")
            $scope.class = "rotate";
        else
            $scope.class = "";
    };

    $scope.showCardProperty = function (event) {
        event.preventDefault();
        event.stopPropagation();

        if ($scope.cardPropertyHeight.height === "300px")
            $scope.cardPropertyHeight.height = "0px";
        else
            $scope.cardPropertyHeight.height = "300px";;
    };
});