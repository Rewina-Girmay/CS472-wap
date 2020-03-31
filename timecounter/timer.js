
window.onload = function f(){ 
    const tim = this.document.getElementById("timer");
    let date= new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDate();
   let month = date.getMonth() + 1;
    let year = date.getFullYear();
   
month = (month < 10 ? "0" : "") + month;
day = (day < 10 ? "0" : "") + day;
hour = (hour < 10 ? "0" : "") + hour;
min = (min < 10 ? "0" : "") + min;
sec = (sec < 10) ? "0" + sec : sec;

var today = year + "-" + month + "-" + day,
    displayTime = hour + ":" + min +":"+ sec; 

tim.value = today +" "+ displayTime;      
setTimeout(f, 1000);
};