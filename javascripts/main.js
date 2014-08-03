/*global angular, $*/
(function (angular, $) {
    var AngularChosenDemo = angular.module('angular.chosen.demo', ['ngResource', 'angular.chosen']);

    AngularChosenDemo.factory('Countries', ['$resource',
        function ($resource) {
            return $resource('data/countries.json');
        }
    ])

    AngularChosenDemo.controller('demoController', ['$scope', 'Countries',
        function ($scope, Countries) {
            $scope.countries = Countries.query();
        }
    ]);

}(angular, $));