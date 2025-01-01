function validateform(){
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let errormessages=document.getElementById('errormessages');
    errormessages.innerHTML="";
    let isvalid=true;

    //email contains a @
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        errormessages.innerHTML+="Please Enter a Valid email address.<br>";
        isvalid=false;
    }

    //user enter a Password with above 6 characters
    if(password.length<6 || password.length>16){
        errormessages.innerHTML+="Password should be between 6 to 12 characters.<br>";
        isvalid=false;
    }

    //Its navigate to another page
    if(isvalid){
        alert("LOGIN SUCCESFULLY!!");
        window.location.href = 'index.html';
    }
    }
