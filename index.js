var randomNumber1 = Math.floor (Math.random() * 3) + 1;//1-3 numbers
var randomTkm1="tkm"+randomNumber1+".png";
var randomImageSource= "img/"+randomTkm1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource); 

var randomNumber2=Math.floor (Math.random()*3) + 1;//1-3 numbers
var randomTkm2="tkm"+randomNumber2+".png";
var randomImageSource2 ="img/"+randomTkm2 ;
var image2= document.querySelectorAll("img") [1] ;
image2.setAttribute ("src" ,randomImageSource2 );

if (randomNumber1===1 && randomNumber2===3) {
  document.querySelector("h2").innerHTML="🚩 Player 1 Wins!";  
}
else if(randomNumber1===2 && randomNumber2===1){
    document.querySelector("h2").innerHTML="🚩 Player 1 Wins!";  
}
else if(randomNumber1===3 && randomNumber2===2){
    document.querySelector("h2").innerHTML="🚩 Player 1 Wins!";  

}
else if(randomNumber1===3 && randomNumber2===1 ){
    document.querySelector("h2").innerHTML="🚩 Player 2 Wins!"; 
} 
else if (randomNumber1===1 && randomNumber2===2) {
    document.querySelector("h2").innerHTML="🚩 Player 2 Wins!"; 
}
else if (randomNumber1===2 && randomNumber2===3) {
    document.querySelector("h2").innerHTML="🚩 Player 2 Wins!"; 
}
else{
    document.querySelector("h2").innerHTML="🚩 Draw 🚩"; 
}
