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
                    list: '=', // the options array
                    enable: '=', // enable of disable the drop-down
                    change: '=', // change will trigger the chosen:updated event
                    model: '=' // the model to which the drop-down should bind
                },
                restrict: 'A',
                link: function ($scope, iElm, iAttr) {
                    iElm.chosen({
                        width: '100%',
                        placeholder_text_single: iAttr.placeholder || 'Select an option',
                        search_contains: true
                    });
                    $scope.$watch('[list,enable,change,model]', function () {
                        iElm.trigger('chosen:updated');
                    }, true);
                }
            };
        }
    ]);
}(angular));