var myApp = angular.module('myApp',[]);

angular.element(document).ready(()=>{
    $("#h-spug").attr({"ng-controller" : "myController"});
    angular.bootstrap(document.getElementById("h-spug"), ["myApp"]);
});
