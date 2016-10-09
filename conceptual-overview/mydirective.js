(function(angular){

  'use strict'
  
  angular.module('onlyDirective', [])
  .directive('myDir',[function(){
    return {
      restrict : 'E',
      template : '<div><input type="text"/> <input type="button"/></div>'
    };
  }]);

})(window.angular);
