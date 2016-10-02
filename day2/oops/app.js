(function() {
  'use strict'

  function Car(color){
    this.color = color; // states

    this.getColor = function(){
      return this.color;
    };
  }

  var bmw = {
    color : 'red',
    getColor  : function() {
      return 'Red';
    }
  };

  console.log('Color Of BMW - '+bmw.getColor());

  var bird = new Object();
  bird.flySpeed = 10;

  var hello = {
    myFun : function(){
      return 'Work';
    }
  };

  var obj = Object.create(hello, {
    foo : {writable : true,value : 10}
  });

  console.log('Child '+obj.myFun());
  Car.prototype.myMethod = function(){
    console.log('Accessed');
  };

  var animal = new function(){
    this.myName = function(){
      return 'Elephant';
    };
  };

  console.log(animal.myName());

  var carh = new Car();
  carh.myMethod();
  console.log('Val is '+obj.foo);
  
}());
