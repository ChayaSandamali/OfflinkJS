/**
 * Created by Chaya on 11/21/2015.
 */
var myApp = angular.module('myApp1', []);
myApp.run(function($templateCache) {
    $templateCache.put('templateId.html', 'This is the content of the template');
});