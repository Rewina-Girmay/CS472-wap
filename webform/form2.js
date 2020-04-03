
$(document).ready(function(){
  
    $("#forms").submit(function(e){
    const la = $('lable');
    $('div').not(".btn").children('input').each(function(idx,ele){
       const ej = $(ele);
        console.log(`The value is ${ej.val()}`);
        e.preventDefault();
    });
   
    });
  
});