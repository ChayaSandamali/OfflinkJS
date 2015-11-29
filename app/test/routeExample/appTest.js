/**
 * Created by Chaya on 11/21/2015.
 */
var sampleApp = angular.module('AppTest', []);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: '/AngularSandBox/app/test/routeExample/home.html'

            }).
            when('/project', {
                templateUrl: '/AngularSandBox/app/test/routeExample/project.html'

            }).
            when('/projectIssues', {
                templateUrl: '/AngularSandBox/app/test/routeExample/projectIssues.html'

            }).
            when('/projectWiki', {
                templateUrl: '/AngularSandBox/app/test/routeExample/projectWiki.html'

            }).
            when('/userProfile', {
                templateUrl: '/AngularSandBox/app/test/routeExample/userProfile.html'

            }).
            when('/userProjects', {
                templateUrl: '/AngularSandBox/app/test/routeExample/userProjects.html'

            }).
            otherwise({
                redirectTo: '/AngularSandBox/app/test/routeExample/home.html'
            });
    }]);
sampleApp.run(['$http','$templateCache',function($http,$templateCache){
    $http.get('/AngularSandBox/app/test/routeExample/userProfile.html').success(function (t) {
        $templateCache.put('userProfile.html', t);
    });
}]);