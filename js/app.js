/// <reference path="app.js" />
// app.js
var App = angular.module('traineesApp', ["ui.router", "LocalStorageModule", "angularUtils.directives.dirPagination"]);

App.config(function ($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/data'); // set the def view

    $stateProvider
        // DATA PAGE STATES AND NESTED VIEWS ========================================

        // nested list with custom controller
        .state('data', {
            url: '/data',
            templateUrl: 'templates/dataPage.html',
            controller: function ($scope, localStorageService) //If not has data on local storage then load sample trainees list.
            {
                if (!(localStorageService.get("trainees")))
                {
                    $scope.trainees = [{ id: 1, name: "Eliezer Yafe", date: new Date(2015, 9, 11), grade: 79, subject: "Algebra", email: "eliz@gmail.com", address: "Ben Yehooda, 34", city: "Kfar Saba", country: "Israel", zip: "66666" },
                                       { id: 2, name: "Moshe Katz", date: new Date(2014, 2, 22), grade: 99, subject: "English", email: "mosh@gmail.com", address: "Haagana, 2", city: "ramat Gan", country: "Israel", zip: "77777" },
                                       { id: 5, name: "Dan Levi", date: new Date(2013, 1, 2), grade: 44, subject: "English", email: "dan@gmail.com", address: "Vizman, 22", city: "Jerusalem", country: "Israel", zip: "55568" },
                                       { id: 3, name: "Shani Oren", date: new Date(2013, 11, 6), grade: 33, subject: "Algebra", email: "shany@gmail.com", address: "Yafo, 15", city: "Jerusalem", country: "Israel", zip: "55568" },
                                       { id: 6, name: "Rafi David", date: new Date(2013, 6, 9), grade: 89, subject: "Algebra", email: "rafi@gmail.com", address: "Rotshild, 1", city: "Herzelia", country: "Israel", zip: "66699" }
                    ];
                }
                else
                {
                    $scope.locations = localStorageService.get("trainees");
                }
            }
        })

    .state('analysis', {
        url: '/analysis',
        templateUrl: 'templates/analysisPage.html'
    })

    .state('monitor', {
        url: '/monitor',
        templateUrl: 'templates/monitorPage.html'
    })
});



