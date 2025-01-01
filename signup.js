function validateform(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let errormessages=document.getElementById('errormessages');
    errormessages.innerHTML="";
    let isvalid=true;

    if(!/^[a=A-Za-z\s]+$/.test(name)){
        errormessages.innerHTML+="Name should contain only alphabets.<br>";
        isvalid=false;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        errormessages.innerHTML+="Please Enter a Valid email address.<br>";
        isvalid=false;
    }
    if(password.length<6 || password.length>16){
        errormessages.innerHTML+="Password should be between 6 to 12 characters.<br>";
        isvalid=false;
    }

    if(isvalid){
        alert("User Profile Is Created,Now go to your Login page!Enjoy Watching Netflix");
        window.location.href = 'login.html';
    }
    }