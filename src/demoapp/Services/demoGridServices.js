

demoapp.service("demoService", function($http,$q){
    var deffered = $q.defer();
    $http.get('http://localhost:9001/json/app.json').then(function(data){
        deffered.resolve(data);
    });

    this.getService = function(){
        return deffered.promise;
    }
})
