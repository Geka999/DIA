var dApp = angular.module('dApp', []);
dApp.controller("diaController", function ($scope) {

    $scope.class = "";
    $scope.cardPropertyHeight = {};
    $scope.cardPropertyHeight.height = 0;
    $scope.blur = "";
    $scope.cardPropertyHeight.display = "";

    $scope.class2 = "";
    $scope.cardPropertyHeight2 = {};
    $scope.cardPropertyHeight2.height = 0;
    $scope.cardPropertyHeight2.display = "";
    $scope.cardPropertyHeight2['z-index'] = "";

    $scope.cardClick = function () {
        if ($scope.class === "") {
            $scope.class = "rotate";
        }
        else {
            $scope.class = "";            
        }
    };

    $scope.showCardProperty = function (event) {
        event.preventDefault();
        event.stopPropagation();

        if ($scope.cardPropertyHeight.height === "300px") {
            $scope.cardPropertyHeight.height = "0px";
            $scope.blur = "noBlur";
            //$scope.cardPropertyHeight.display = "none"
        }
        else {
            $scope.cardPropertyHeight.height = "300px";
            $scope.blur = "blur";
            $scope.cardPropertyHeight.display = ""
        }
    };

    $scope.showCardProperty2 = function (event) {
        if ($scope.cardPropertyHeight2.height === "763px") {
            $scope.cardPropertyHeight2.height = "0px";
            $scope.cardPropertyHeight.height = "0px";
            //$scope.cardPropertyHeight.display = "none"
            //$scope.cardPropertyHeight2.display = "none"
            $scope.blur = "noBlur";
        }
        else {
            $scope.cardPropertyHeight2.height = "763px";
            $scope.cardPropertyHeight2.display = "block"
            $scope.cardPropertyHeight2['z-index'] = "5";
        }
    };
});