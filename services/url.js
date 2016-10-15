(function(angular){
  'use strict'

  angular.module('appUrl', [])
  .factory('urls',[function(){
    return {
      exLatest : 'http://api.fixer.io/latest',
      postData : 'http://reqres.in/api/users'
    }
  }]);
})(window.angular);
