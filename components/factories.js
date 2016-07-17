(function () {

    "use strict";

    ngClassifieds.factory("classifiedsFactory", function ($http) {
        function getData () {
            return $http.get('data/classifieds.json');
        }
        return {
            getData: getData
        }
    });
})();
