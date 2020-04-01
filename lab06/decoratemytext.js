

window.onload = function(){
    const btn = document.getElementById("btn");
    btn.onclick = btnClick;
    const ch = document.getElementById("check");
    ch.onclick=onChange;

}

function msg(){
    alert("Hello, World");
}

function btnClick(){
    const txt = document.getElementById("user");
    let siz = 2;
    txt.style.fontSize = parseInt(txt.style.fontSize, 10) + siz + "pt";
    siz+=2;
}

function onChange(){
    const txt = document.getElementById("user");
     const temp = txt.style;
     const bod = document.getElementById("body");
     const temp2 = bod.style;
    if(this.checked==true){
    txt.style.fontWeight = "bold";
    txt.style.color = "green";
    txt.style.textDecoration = "underline";
    bod.style.backgroundImage = "url('/images/dollar.jpg')";
}
      else { 
           txt.style= temp;
           bod.style=temp2;
    }
}