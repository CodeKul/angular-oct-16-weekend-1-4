(function(angular){
  'use strict'

  angular.module('logger', [])
  .factory('logFactory',['$log',function(lg){
    return {
      i : function(msg){
        lg.info(msg);
      },
      e : function (msg){
        lg.error(msg);
      }
    };
  }]);
})(window.angular);
