(function() {
  'use strict'

  var all = 10;

  function myFunction() {
    var i = 10, j = 20;
    return i + j + all;
  }

  var result = myFunction();
  console.log('Result is - '+result);

  var click = function(num1, num2){
    return num1 + num2 + all;
  };

  function enableOnly(){
      var i = 10;
      function innerEnable(){
        var j = 5;
        console.log('Outer I - '+i);
      }
      console.log('Inner J - '+j);
  }

  var login = function(sm) {
    if(sm === 'fb'){
      return function(){
        return 'Login to FB';
      };
    }
    else if(sm == 'g+') {
      return function (){
        return 'Login to g+';
      }
    }
    else return function(){
      return 'Invallid Social Media';
    }
  };

  function callMe(){
    console.log('Oth Arg - '+arguments[0]);
  }

  callMe(1,2,3); // ...

  console.log(login('fb')());

  var fb = login('fb');
  console.log('2nd - '+fb());;

  var tempFun = fb;
  console.log('3rd'+tempFun());

  console.log('Click effetc is - '+click(10,80));;
})();
