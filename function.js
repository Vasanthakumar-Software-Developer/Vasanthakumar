var img=document.getElementById("ctf");
var slides=['galaxy.jpg','galaxy1.jpg'];
var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
  
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);