/*global angular, $*/
(function (angular, $) {
    var AngularChosenDemo = angular.module('angular.chosen.demo', ['ngResource', 'angular.chosen']);

    AngularChosenDemo.factory('Countries', ['$resource',
        function ($resource) {
            return $resource('data/countries.json');
        }
    ]);

    AngularChosenDemo.controller('demoController', ['$scope', 'Countries',
        function ($scope, Countries) {
            var data = {
                countries: [],
                country: [],
                countriesTest: []
            };

            $scope.countries = Countries.query();
            $scope.countriesMultiple = Countries.query(function (cts) {
                $scope.countriesTest = [cts[0], cts[1], cts[2]];
            });

            $scope.maxSelected = function () {
                $scope.maxSelectionDone = true;
            };

            $scope.chosenOpened = function () {
                $scope.chosenOpenedDone = true;
            };

            $scope.chosenClosed = function () {
                $scope.chosenClosedDone = true;
            };
        }
    ]);

}(angular, $));