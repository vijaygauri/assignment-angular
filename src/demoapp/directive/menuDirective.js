

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
 }])