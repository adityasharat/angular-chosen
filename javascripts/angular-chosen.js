/*
 * Use this directive to convert drop downs into chose drop downs.
 */
(function (angular) {
    var AngularChosen = angular.module('angular.chosen', []);

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
                model: '=', // the model to which the drop-down should bind,
                ngModel: '='
            };

            /*
             * initialize the list of items
             * to watch to trigger the chosen:updated event
             */
            watchCollection = [];
            Object.keys(scope).forEach(function (scopeName) {
                watchCollection.push(scopeName);
            });

            /*
             * Add the list of event handler of the chosen
             * in the scope.
             */
            Object.keys(EVENTS).forEach(function (eventNameAlias) {
                scope[eventNameAlias] = '=';
            });

            linker = function ($scope, iElm, iAttr) {
                var maxSelection = parseInt(iAttr.maxSelection, 10);

                if (isNaN(maxSelection) || maxSelection === Infinity) {
                    maxSelection: undefined;
                }

                iElm.chosen({
                    width: '100%',
                    placeholder_text_single: iAttr.placeholder || 'Select an option',
                    max_selected_options: maxSelection,
                    search_contains: true
                });

                iElm.on('change', function () {
                    iElm.trigger('chosen:updated');
                });

                $scope.$watch('[' + watchCollection.join(',') + ']', function () {
                    iElm.trigger('chosen:updated');
                }, true);

                // assign event handlers
                Object.keys(EVENTS).forEach(function (eventNameAlias) {
                    if (typeof $scope[eventNameAlias] === 'function') { // check if the handler is a function
                        iElm.on(EVENTS[eventNameAlias], $scope[eventNameAlias]); // listen to the event triggered by chosen
                    }
                });
            };

            // return the directive
            return {
                name: 'chosen',
                scope: scope,
                restrict: 'A',
                link: linker
            };
        }
    ]);
}(angular));