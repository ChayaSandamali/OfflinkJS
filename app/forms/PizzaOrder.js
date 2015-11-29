'use strict';
var formsApp = angular.module('myApp.forms', ['OfflinkJs']);

formsApp.controller('PizzaCtrl', ['$scope', '$http', 'ConnectionDetectorService', function ($scope, $http, ConnectionDetectorService) {
    $scope.order = {};
    //$scope.order.delivery = {
    //    value: new Date(1970, 0, 1, 14, 57, 0)
    //};

    $scope.order.ACTION = "save_order";

    $scope.orderSubmitWithCache = function () {
        $http.post('http://localhost/AngularSandbox/app/forms/pizza_server.php',
            $scope.order,
            {
                "flnk_cache": true,
                "req_prefix": "non_pizza_order_req"
            }
        ).
            then(function (response) {
                $scope.result = response;
            }, function (response) {
                $scope.result = response;
            });
    };

    $scope.orderSubmitWithoutCache = function () {
        // Simple POST request example (passing data) :
        $http.post('http://httpbin.org/post', $scope.order, {"flnk_cache": false}).
            then(function (response) {
                $scope.result = response;
            }, function (response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.result = response;
            });
    };

    $scope.getConnectionStat = function () {
        $scope.connectionStat = "Manually retrieved connectivity : " + ConnectionDetectorService.getConnectionStatus();
        //$scope.$apply();
    };

    //$scope.registerServerConnectionCallback = function () {
    //    ConnectionDetectorService.register("http://localhost", function (connectionStatus) {
    //        console.log("Connection status : " + connectionStatus);
    //        $scope.connectionStatus = connectionStatus == 0 ? "Not Connected!" : "Connected!";
    //    });
    //}
}]);

// Commented out the syncing of cached requests
formsApp.run(['flnkSynchronizer', 'ConnectionDetectorService', '$rootScope',
        function (flnkSynchronizer, ConnectionDetectorService, $rootScope) {
            //var result = flnkSynchronizer.sync("pizza_order_req");
            //console.log(result);

            // Register callback function to get notified when server connection is lost.
            ConnectionDetectorService.register("http://localhost", function (connectionStatus) {
                console.log("Connection status : " + connectionStatus);
                $rootScope.connectionStatus = connectionStatus == 0 ? "Not Connected!" : "Connected!";
                $rootScope.$apply();
            });
        }]
);