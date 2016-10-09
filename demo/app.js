
/*document.getElementById('btnOkay').addEventListener('click',function(){
  console.log('Text Name  - ');
});*/

var $ = function(str){
  return document.querySelector(str);
}
function myClick() {
  var elQ = $('#textName').value;
  console.log('Elq - '+ elQ);
  var elName = document.getElementById('textName');
  var textName = elName.value;
  console.log('Text Name  - '+ textName);
  document.getElementById('divEmpty').innerHTML = 'You Typed - '+ textName;
}

function onType(value, div){
  div.innerHTML = value;
}
