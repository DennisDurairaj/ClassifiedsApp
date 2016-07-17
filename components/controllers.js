(function () {
    "use strict";
    ngClassifieds.controller("classifiedsController", function ($scope, $http, $mdSidenav, $mdToast, $mdDialog, classifiedsFactory) {
        classifiedsFactory.getData()
            .success(function (result) {
                $scope.classifieds = result;
                console.log(result);
            })
            .error(function (data, status) {
                console.log(data);
            });

        var contact = {
            name: "Dennis Durairaj",
            phone: "9876543210",
            email: "someemail@somedomain.com"
        }

        $scope.openSidebar = function () {
            $mdSidenav('left').open();
        }

        $scope.closeSidebar = function () {
            $mdSidenav('left').close();
        }

        $scope.addClassified = function (classified) {
            if (classified) {
                $scope.classified.contact = contact;
                $scope.classifieds.push(classified);
                $scope.classified = {};
                $scope.closeSidebar();
                showToast("Classified Saved!")
            }
        }

        $scope.editClassified = function (classified) {
            $scope.editing = true;
            $scope.openSidebar();
            $scope.classified = classified;
//            classified.price = $scope.classified.price;
//            classified.description = $scope.classified.description;
        }

        $scope.saveChanges = function () {
            $scope.editing = false;
            $scope.classified = {};
            $scope.closeSidebar();
            showToast("Changes Saved!")
        }

        $scope.deleteClassified = function (event, classified) {
            var confirm = $mdDialog.confirm().title("Are you sure you want to delete " + classified.title + "?").ok("Yes").cancel("No").targetEvent(event);
            $mdDialog.show(confirm).then(function () {
            var index = $scope.classifieds.indexOf(classified);
            $scope.classifieds.splice(index, 1);
            });
        }

        function showToast (message) {
            $mdToast.show($mdToast.simple().content(message).position("top, right").hideDelay(3000));
        }
    });
})();
