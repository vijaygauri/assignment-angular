var demoapp = angular.module("demoapp",['ngRoute','ngStorage', 'ui.grid', 'ui.grid.pagination']);
demoapp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/demoapp',{templateUrl: 'src/demoapp/templates/demoapp.html',
        controller: 'demoController'
}).when('/home',{
    resolve:{
       'check': function($location,$localStorage){
           if(!$localStorage.loggedIn){
               $location.path('/');
           }else{
               console.log("else");
           }
       } 
    }, 
    templateUrl:'src/demoapp/templates/home.html',
        controller: 'demoGridController'

}).when('/AccountSummary',{templateUrl: 'src/demoapp/templates/accountSummary.html',
        controller: 'accountController'
}).otherwise({redirectTo: '/demoapp'});

}]);
demoapp.controller('accountController',['$scope', function($scope){

}])
