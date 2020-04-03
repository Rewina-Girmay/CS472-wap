
 $(document).ready(function(){
    
   $("#forms").submit( function(e){
    const email = $("#email");
    const password = $("#password");
     console.log(email.val());
    console.log(password.val());
    e.preventDefault();
   });

  });
   
    