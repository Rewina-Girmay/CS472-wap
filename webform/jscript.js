
function printValue(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    alert("email = "+email.value +" " + "password = "+password.value);
    const c = email.value;
   console.log(JSON.parse(JSON.stringify(c)));
   console.log(password.value);
}

