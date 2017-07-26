var app = angular.module('rollce-royce-test', ['ngRoute', 'ngResource', 'ui.bootstrap', 'toaster', 'angular.filter', 'ngRoute','gridshore.c3js.chart']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when("/staticui", {
        controller: "StaticUiController",
        templateUrl: "Views/primary.html"
    });

    $routeProvider.otherwise({ redirectTo: "/staticui" });

    $locationProvider.html5Mode(false);
});
