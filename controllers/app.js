(function(angular){

  'use strict'

  angular.module('MyApp', [])
  .controller('MyController',['$scope',function(scp){
    scp.myName = 'Android'; // state
    scp.fireOnClick = function(whatToPrint){
      // behaviour
      scp.myName = whatToPrint;
    };

    function printObj() {
      var output = '';
      for (var property in scp) {
        output += property + ': ' + scp[property]+'; ';
      }
      console.log(output);
    }
  }])
  .controller('OuterController',['$scope',function(scp){
    scp.outerName = 'Outer Android';
  }])
  .controller('InnerController',['$scope',function(scp){
    scp.innerName = 'inner Android';
  }])
  .controller('Inner2Controller',['$scope',function(scp){
    scp.inner2Name = 'Inner 2 Android';
  }])

})(window.angular);
