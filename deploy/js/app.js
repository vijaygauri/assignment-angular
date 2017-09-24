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
;

demoapp.directive('menu', [function() {
        return {
            restrict: 'E',
            replace: true,
             transclude: true,
            scope: {
                loc: '@location',
                menus: '=',
                active: '='
            },
            
            template: '<ul class="list-group">' + 
                         '<li class="collapsed" ng-repeat="m in menus.left" ng-click="select($index)" ng-class="{active: $index == selected}">' + 
                             '<a href="{{m.link}}">{{m.text}}</a>' + 
                         '</li>' + 
                      '</ul>',

            link:  function($scope, $element) {
                if(sessionStorage.getItem("active-key") !== null){
                    $scope.selected = sessionStorage.getItem("active-key");
                }else{
                    $scope.selected = 0;
                }
                

               $scope.select= function(index) {
                $scope.selected = index; 
                sessionStorage.setItem("active-key", $scope.selected);
                }
               
            },          
        }
 }]);

demoapp.service("demoService", function($http,$q){
    var deffered = $q.defer();
    $http.get('http://localhost:9001/json/app.json').then(function(data){
        deffered.resolve(data);
    });

    this.getService = function(){
        return deffered.promise;
    }
})
;

demoapp.controller('MenuCtrl', function ($scope) {
   
        $scope.menus = {
            "current": "index",
            "left": [{
                 "id": 'item1',
                "active": true,
                "link": "\#/home",
                "text": "Transactions"},
            {
                 "id": 'item2',
                "active": false,
                "link": "\#/AccountSummary",
                "text": "Account Summary"}
            ],
            
        };

   

    })
   ;

demoapp.controller('demoController',['$scope','$location','$localStorage', function($scope,$location,$localStorage){
      $scope.IsVisible = false;
    $scope.submitLogin=function(){
        $localStorage.loggedIn = false;
        console.log("submit");
        if($scope.user.email == "admin@gmail.com" && $scope.user.password == "admin123"){
            $localStorage.loggedIn = true;
            
            console.log("success");
            $location.path('/home');
        }else{
            $scope.errorLogin = "Enter valid username and password";
            $scope.IsVisible = true;
        }
    }
}]);

demoapp.controller('demoGridController',['$scope','demoService','uiGridConstants', function($scope,demoService,uiGridConstants){
 $scope.gridOptions2 = {
    enablePaginationControls: true,
    enableFiltering: true,
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;
    },
    paginationPageSize: 25,
    columnDefs: [
      { name: 'Date' },
      { name: 'Transaction Details' },
      { name: 'Withdrawals INR' }
    ]
  };
 
  $scope.gridOptions2.onRegisterApi = function (gridApi) {
    $scope.gridApi2 = gridApi;
  }

  var promise = demoService.getService();
 promise.then(function(data){
    $scope.gridOptions2.data = data.data;
 })
    
}])