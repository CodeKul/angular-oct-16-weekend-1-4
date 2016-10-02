var oss = ['Android','iOS','Rim','Symbian','Mango','Bada','Plam'];

for(var i = 0; i < oss.length; i++ ){ // familier
  console.log('City - ' + oss[i]);
  document.write('<div>'+oss[i]+'</div>');
}
oss.forEach(function(element , index) { // functional programming
  // simple but not famililer
  console.log(element);
});
var myObj = {
  os : 'Android',
  ver : 'ICE',
  api : '4.0'
};

for (var prop in myObj) {
  console.log( prop +' = '+ myObj[prop]);
}

for (os of oss) {
  console.log('Os - '+os);
}

var stu = {
  cls : {
    bag :{

    }
  }
};

for (var cls in stu) {
    for(bag in cls){
    }
}
