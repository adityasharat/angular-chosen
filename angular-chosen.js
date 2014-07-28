/*
 * Use this directive to convert drop downs into chose drop downs.
 */
(function (angular) {
    var AngularChosen = angular.module('AngularChosen', []);

    AngularChosen.directive('chosen', [

        function () {
            var EVENTS, scope, linker, watchCollection;

            EVENTS = [{
                onChange: 'change'
            }, {
                onReady: 'chosen:ready'
            }, {
                onMaxSelected: 'chosen:maxselected'
            }, {
                onShowDropdown: 'chosen:showing_dropdown'
            }, {
                onHideDropdown: 'chosen:hiding_dropdown'
            }, {
                onNoResult: 'chosen:no_results'
            }];

            scope = {
                list: '=', // the options array
                enable: '=', // enable of disable the drop-down
                change: '=', // change will trigger the chosen:updated event
                model: '=' // the model to which the drop-down should bind
            };

            watchCollection = [];
            Object.keys(scope).forEach(function (scopeName) {
                watchCollection.push(scopeName);
            });

            Object.keys(EVENTS).forEach(function (eventNameAlias) {
                scope[eventNameAlias] = '=';
            });

            linker = function ($scope, iElm, iAttr) {
                iElm.chosen({
                    width: '100%',
                    placeholder_text_single: iAttr.placeholder || 'Select an option',
                    search_contains: true
                });
                $scope.$watch('[' + watchCollection.join(',') + ']', function () {
                    iElm.trigger('chosen:updated');
                }, true);

                Object.keys(EVENTS).forEach(function (eventNameAlias) {
                    if (typeof $scope[eventNameAlias] === 'function') {
                        iElm.on(EVENTS[eventNameAlias], $scope[eventNameAlias]);
                    }
                });
            };

            return {
                name: 'chosen',
                scope: scope,
                restrict: 'A',
                link: linker
            };
        }
    ]);
}(angular));