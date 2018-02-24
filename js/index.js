var lefP = document.getElementById('leftPlus');
var num;
lefP.addEventListener("click", function(){
  num = document.getElementById("lScore").innerHTML;
  num = parseInt(num);
  num++;
  
  document.getElementById("lScore").innerHTML = num;
  
  
});
var lefM = document.getElementById('leftMinus');
lefM.addEventListener("click", function(){
  num = document.getElementById("lScore").innerHTML;
  num = parseInt(num);
  num--;
  
  document.getElementById("lScore").innerHTML = num;
  
  
});

var rigP = document.getElementById('leftPlus2');
rigP.addEventListener("click", function(){
  num = document.getElementById("rScore").innerHTML;
  num = parseInt(num);
  num++;
  
  document.getElementById("rScore").innerHTML = num;
  
  
});

var rigM = document.getElementById('leftMinus2');
rigM.addEventListener("click", function(){
  num = document.getElementById("rScore").innerHTML;
  num = parseInt(num);
  num--;
  
  document.getElementById("rScore").innerHTML = num;
  
  
});