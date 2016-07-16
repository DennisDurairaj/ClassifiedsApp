var ngClassifieds = angular.module("ngClassifieds", ["ngMaterial"]);

ngClassifieds.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('teal').accentPalette('orange');
});

ngClassifieds.directive("helloWorld", function () {

});
