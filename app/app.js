'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'myApp.forms',
    'myApp.view2',
    'myApp.version',
    'jqueryUiModule'
]);

myApp.controller('DatePickerController', function () {
    this.user = {
        dateOfBirth: new Date(1970, 0, 1)
    }
});

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('TodoList', {
        templateUrl: 'forms/TodoList.html',
        resolve: {
            dbInitFunction: function (flnkDatabaseService) {
                setSchemaBuilder();
                flnkDatabaseService.init('todolist', 1);
            }
        }
    }).otherwise({redirectTo: '/forms'});
}]);
