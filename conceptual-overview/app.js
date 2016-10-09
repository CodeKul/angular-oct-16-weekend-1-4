(function(angular){
  'use strict'

  angular.module('MyApp', ['onlyDirective','webService'])
  .controller('MyController',['webConnector',function(webCon){
      var vm = this;
      vm.myName = 'Android';

      vm.goToWeb = function(){
        webCon.webCall();
      };

      vm.calc = function(){
        return 52 * 100;
      };
  }]);

})(window.angular);
