(function(angular){
  'use strict'

  angular.module('MyApp', ['logger','webServices'])
  .controller('MyController',['$scope','logFactory','webFactory','mySecondService',function(scp,fac,ws,mss){

    scp.movies = [];
    scp.addMovie = function (){
        scp.movies.push(scp.movieName);
    };
    scp.onInfo = function(){
      fac.i('It is info');
        scp.rates = ws.latestRates2().then(function(res){
          scp.rates = res.data.rates;
          console.log(scp.rates);
        });
    };
    scp.onError = function(){
      fac.e('It is error');
      ws.postSomething({name : scp.myName,movies : scp.movies}).then(function(res){
        console.log(res.data);
      });
    };
    scp.mss = mss.myData;
  }]);
})(window.angular);
