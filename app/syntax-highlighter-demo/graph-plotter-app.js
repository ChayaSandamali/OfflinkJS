/**
 * Created by ArunaTebel on 9/4/2015.
 */

var graphPlotterDemoApp = angular.module('graphPlotterDemoApp', ['graphPlotter']);

graphPlotterDemoApp.controller('graphPlotterDemoCtrl', ['$scope', function ($scope) {
    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
    };

    var trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter'
    };

    var trace3 = {
        x: [1, 2, 3, 4],
        y: [23, 4, 2, 6],
        type: 'scatter'
    };

    var trace4 = {
        x: [1, 2, 3, 4],
        y: [9, 11, 3, 12],
        type: 'scatter'
    };
    $scope.graphPlots = [trace1, trace2, trace3, trace4];
}]);