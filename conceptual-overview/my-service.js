(function(angular){

  'use strict'

  angular.module('webService', [])
  .factory('webConnector',['$log',function(log){

    return {
      webCall : function (){
        log.info('This is info');
        log.error('This is error');
      }
    };
  }]);

})(window.angular);
