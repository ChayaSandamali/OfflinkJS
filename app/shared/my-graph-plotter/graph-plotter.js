/**
 * Created by ArunaTebel on 9/4/2015.
 */

var graphPlotter = angular.module('graphPlotter', []);

graphPlotter.directive('linePlot', ['$parse', function ($parse) {
    function linkFunc(scope, element, attrs) {
        var modelAccessor = $parse(attrs.graphPlots);
        scope.$watch(modelAccessor, function (plots) {
            //var plot = [];
            //console.log(plots);
            //angular.forEach(plots, function (value, key) {
            //    this.push(value);
            //}, plot);
            Plotly.newPlot(element[0], plots);
        });
    }

    return {
        scope: {
            graphPlots: "="
        },
        link: linkFunc
    };
}]);

