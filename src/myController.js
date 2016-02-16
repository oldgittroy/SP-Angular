class MyController {
    constructor($scope) {
        this.$scope = $scope;
        
        this.init();
    }
    
    init() {
        this.$scope.message = "Hello World";
    }
}

MyCotroller.$inject = ["$scope"];

const MyControllerModule = angular.module("MyControllerModule",[]);
MyControllerModule.controller("MyController", MyController);