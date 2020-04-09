/*Generator (Hex & RGB) Function*/
function myFunction2() {
 var x = document.getElementById("Red").value;
 var y = document.getElementById("Green").value; 
 var z = document.getElementById("Blue").value;
 document.getElementById("rgb").value = "rgb(" + x + "," +y+ ","+ z +")";  
 document.getElementById("hex").value ='#'+rgb(x)+rgb(y)+rgb(z);
 document.getElementById("bgcolor").style.backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
}

function rgb(a) { 
var hex = Number(a).toString(16); 
if (hex.length < 2) { 
hex = "0" + hex; 
} 
return hex; 
}

/*Copy To Clip Board Function*/
function myFunc() {
  let copyText = document.getElementById("hex");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  //Animation
    setTimeout(function(){ 
        copyText.style.transform = "scale(1.15)"; 
        copyText.style.transition = "0.5s transform ease";
        }, 100);
    setTimeout(function(){
        copyText.style.transform = "scale(1)";
        copyText.style.transition = "0.5s transform ease";
        }, 1000);
}

function myFunct() {
  let copyText = document.getElementById("rgb");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

    //Animation
    setTimeout(function(){
        copyText.style.transform = "scale(1.15)";
        copyText.style.transition = "0.5s transform ease";
    }, 100);
    setTimeout(function(){
        copyText.style.transform = "scale(1)";
        copyText.style.transition = "0.5s transform ease";
    }, 1000);
}

//Animated Nav Btn
function myFunction(x) {
    x.classList.toggle("change");
}
