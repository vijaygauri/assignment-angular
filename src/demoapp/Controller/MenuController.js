

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
   