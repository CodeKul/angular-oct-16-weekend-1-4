(function(angular){

  'use strict'

  angular.module('providedService', [])
  .config(['$provide',function(pr){
      pr.factory('myOtherFact', function(){
          return {};
      });
  }]);
})(window.angular);
