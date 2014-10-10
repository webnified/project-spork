angular.module('SpoonAndPepper', ['SpoonAndPepper.filters', 'SpoonAndPepper.services', 'SpoonAndPepper.directives']).
        config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:name', {
            templateUrl: function(parameters){
                return parameters.page + '.html';;
            },
            controller: 'StaticRouterController'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);

function StaticRouterController($scope, $route, $routeParams) {
    $route.current.templateUrl = '/pages/' + $routeParams.name + ".html";

    $.get($route.current.templateUrl, function (data) {
        $scope.$apply(function () {
            $('#views').html($compile(data)($scope));
        });
    });

    console.log($route.current.templateUrl);
}

StaticRouterController.$inject = ['$scope', '$route', '$routeParams'];