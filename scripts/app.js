var ngClassifieds = angular.module("ngClassifieds", ["ngMaterial"]);

ngClassifieds.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalatte('teal').accentPalatte('orange');
});
