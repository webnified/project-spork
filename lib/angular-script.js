var app = angular.module('isolate', []);

app.controller('IsolateCtrl', function ($scope) {
	$scope.isolateClick = function (message) {
		console.log("You clicked me!" + message);
	}
});

app.directive("kid", function () {
	return {
		restrict : "E",
			scope: {
				done:"&"
			},
		template : "<input type='text' ng-model='message'> {{message}}" +
		"<div class='button' ng-click='done({click:message})'>I'm done!</div>"
	}
});