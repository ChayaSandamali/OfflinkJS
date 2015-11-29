var myCacheApp = angular.module('myCacheApp', []);

myCacheApp.run(function ($templateCache) {
    $templateCache.put('second_page.html');
});

myCacheApp.controller('myCacheAppCtrl', ['$scope', function ($scope) {
    $scope.myVar = "Its working!";
}]);