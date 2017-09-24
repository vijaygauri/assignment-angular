

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