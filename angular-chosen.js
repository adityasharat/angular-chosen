/*
 *Use this directive to convert drop downs into chose drop downs.
 */
(function (angular) {
    var AngularChosen = angular.module('AngularChosen', []);

    AngularChosen.directive('chosen', [

        function () {
            return {
                name: 'chosen',
                scope: {
                    model: '=', // the model to which this drop down is to be binded
                    enable: '=', // attribute used to enable and disable the chosen
                    change: '=' // trigger a change in the chosen drop down
                },
                restrict: 'A',
                link: function ($scope, iElm) {
                    iElm.chosen({
                        width: '100%',
                        placeholder_text_single: 'Select an option',
                        search_contains: true
                    });
                    $scope.$watch('[model,enable,change]', function () {
                        iElm.trigger('chosen:updated');
                    }, true);
                }
            };
        }
    ]);
}(angular));