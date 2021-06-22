let button=document.querySelectorAll(".button");
let displayMain=document.querySelector(".display");
let first_num="";
let operator="";
let sec_num="";
let result=0;

console.log(button);
button.forEach(function(eachButton){
    eachButton.addEventListener("click",function(){
        display(eachButton.textContent);
    })
})
let key=window.addEventListener("keydown",function(e){
   console.log(e.key);
    display(e.key);
})

let display= function(key){
    if(key==="1"||key==="2"||key==="3"||key==="4"||key==="5"||key==="6"||key==="7"||key==="8"||key==="9"||key==="0"){
        numFunc(key);
    } else if(key==="Clear"){
        displayMain.textContent=0;
        clear1();
    } else if (key==="+"||key==="/"||key==="*"||key==="-"){
        operatorFunc(key);
    } else if(key==="="){
        equal();
    }  
}

let numFunc= function(num){
    first_num=first_num+num;
 displayMain.textContent=first_num;
}

let clear1=function(){
    first_num="";
    operator="";
    
        sec_num="";
        // result="";
        
}

let operatorFunc= function(key){
    if(operator){
        equal();
        first_num=result;
    }
    displayMain.textContent=first_num+key
    operator=key;
    sec_num=first_num;
    first_num="";
    result="";
}


function plus(second, first){
    result=first+second;
    if(result){
    displayMain.textContent=result;}
    else{
        displayMain.textContent=0; 
    } 
    clear1();
}
function minus(second,first){
    result=first-second;
    if(result){
        displayMain.textContent=result;}
        else{
            displayMain.textContent=0; 
        } 
    clear1(); 
}
function divide( second,first){
    result=first/second;
    if(result){
        if(Number.isInteger(result)){
            displayMain.textContent=result 
        }else{
        displayMain.textContent=result.toFixed(2);}}
    else{
            displayMain.textContent=0; 
        } 
    clear1(); 
}
function multiply(second,first){
    result=first*second;
    if(result){
        displayMain.textContent=result;}
        else{
            displayMain.textContent=0; 
        } 
    clear1();
}

function equal(){
    sec_num=parseInt(sec_num);
    first_num=parseInt(first_num);
if(operator==="+"){
    plus(first_num,sec_num);
} else if(operator==="-"){
    minus(first_num,sec_num);
}else if(operator==="/"){
    divide(first_num,sec_num);
}else {
    multiply(first_num,sec_num);
}
}
