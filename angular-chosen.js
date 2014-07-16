(function (angular) {
    var AngularChosen = angular.module('AngularChosen', []);

    AngularChosen.directive('chosen', [

        function () {
            return {
                name: 'chosen',
                scope: {
                    model: '=',
                    enable: '=',
                    change: '='
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