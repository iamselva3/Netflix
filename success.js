let h=document.getElementById("h1");
h.textContent="Payment Processing";
   let countdown=5;

   //set inderval time set it as 700ms so the number will change ever 700ms
let last=setInterval(display,700);

const timerelement=document.getElementById('main');



function display(){
   timerelement.textContent=countdown;

   if(countdown==0){
       clearInterval(last);
       timerelement.textContent="";
// Will appear the image at 700ms
       img1.src="./check02.gif";


   }
   else{
       countdown--;
   }
}

//will navigate the  another page
function through(){
    window.location.href="payhis.html";
}