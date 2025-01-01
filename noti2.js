
//Dom contains the date function
function datetime(){
    let d=new Date("2020-12-2");
    document.getElementById('p2').innerHTML=d;
}
let parent=document.getElementById("div1");
   
   let para1=document.createElement("h1");
   para1.textContent="Completed";
   parent.appendChild(para1);

   let par2=document.createElement("p");
   par2.textContent="1. You have 2 Complete payments";
   par2.className="para2";
   parent.appendChild(par2);

   let g=document.createElement("button");
   g.textContent="View deatails";
   g.id="btn";
   g.className="btn btn-primary";
   parent.appendChild(g);

   let para3=document.createElement("p");
   para3.id="p2";
   para3.textContent="";
   parent.appendChild(para3);

   g.onclick=datetime;



//Second Notification
function datime(){
    let e=new Date();
    document.getElementById('p3').innerHTML=e;
}
let parent1=document.getElementById("div2");
   
   let par3=document.createElement("p");
   par3.textContent="2. You have 5 days left for 5/12/2020";
   let lineBreak = document.createElement("br");
par3.appendChild(lineBreak);

// Add the second part of the text
par3.appendChild(document.createTextNode("   For your Next recharge"));

   par3.className="para3";
   parent1.appendChild(par3);

   let g1=document.createElement("button");
   g1.textContent="View deatails";
   g1.id="btn1";
   g1.className="btn btn-primary";
   parent1.appendChild(g1);

   let para4=document.createElement("p");
   para4.id="p3";
   parent1.appendChild(para4);

   g1.onclick=datime;

   let c=document.createElement("hr");
   c.id="hr1";
   parent1.appendChild(c);

   let k=document.createElement("img");
   k.src="vjj.gif";
   k.id="img1";
   parent1.appendChild(k);
   