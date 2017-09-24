

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
}])