
const message=document.getElementById("message");
let a=Math.round(Math.random()*100);
console.log(a);
// console.log(num1);
const live=document.getElementById("lives");
let lives=10;
let message1;
const submit1=document.getElementById("submit1");
submit1.onclick = () =>{
    let num1=document.getElementById("number1").value;
    lives=lives-1;
    if(num1 == a){
        location.href="win.html";
    }
    else if(lives <= 0){
        location.href="lose.html";
    }
    else if(a > num1){
        message1="You has Entered the lower value";
    }
    else if(a < num1){
        message1="you has Entered the higher value";
    }
    message.style.display="inherit";
    message.innerHTML=message1;
    live.innerHTML=lives;
    console.log(num1);
 

}