(function(angular){
  'use strict'
  angular.module('webServices', ['appUrl'])
  .factory('webFactory',['$http','urls',function(http,url){
    return {
      latestRates : function(){
        http.get(url.exLatest).then(function(res){
          //console.log(res.data.base);
          return res.data;
        });
      },
      latestRates2 : function() {
        return http.get(url.exLatest);
      },
      postSomething : function (data){
        return http.post(url.postData,data);
      }
    };
  }])
  .service('mySecondService',[function(){
    this.myData = 'hello';
  }]);
})(window.angular);
