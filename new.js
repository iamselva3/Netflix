function greet(name,country){
    return `

We are thrilled to welcome you, "${name}", to our growing community! Thank you for subscribing to our website from "${country}" in 2024.
Your decision to join us is greatly appreciated, and we are committed to providing you with the best experience possible.
 As "${name}", you now have access to exclusive content, tailored services, and a world of possibilities. Should you need any assistance, our support team is here to help you every step of the way.
<br><br>
Warm regards,
Netflix ${country}.`;
}

//Array of arguments
let args=[];

for(let i=0;i<2;i++){
    args[i]=prompt("Enter a Name and Country");
}
//Using call with spread syntax to pass the array elements as individual arguments
let greeting=greet.call(null,...args);

document.write(greeting);


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>time program</title>
//     <script>
//         function datetime(){
//     document.getElementById('p1').innerHTML=Date();
// }
//     </script>
// </head>
// <body>
//     <button onclick="datetime()">Display time</button>
//     <p id="p1"></p> 
// </body>
// </html>