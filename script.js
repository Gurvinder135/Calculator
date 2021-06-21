let k1=document.querySelector("#a1");
let k2=document.querySelector("#a2");
let k3=document.querySelector("#a3");
let k4=document.querySelector("#a4");
let k5=document.querySelector("#a5");
let k6=document.querySelector("#a6");
let k7=document.querySelector("#a7");
let k8=document.querySelector("#a8");
let k9=document.querySelector("#a9");
let k0=document.querySelector("#a0");
let kplus=document.querySelector("#aplus");
let kminus=document.querySelector("#aminus");
let kdiv=document.querySelector("#adiv");
let kmul=document.querySelector("#amul");
let kequal=document.querySelector("#aequal");
let kclear=document.querySelector("#clear");
let display=document.querySelector(".display");
let number="";
let first_num="";
let sec_num="";
let operator="";
let result=0;

k1.addEventListener("click", function(){
    
    display.textContent=`${number_func(1)}`;
})
k2.addEventListener("click", function(){
    display.textContent=`${number_func(2)}`;
})
k3.addEventListener("click", function(){
    display.textContent=`${number_func(3)}`;
})
k4.addEventListener("click", function(){
    display.textContent=`${number_func(4)}`;
})
k5.addEventListener("click", function(){
    display.textContent=`${number_func(5)}`;
})
k6.addEventListener("click", function(){
    display.textContent=`${number_func(6)}`;
})
k7.addEventListener("click", function(){
    display.textContent=`${number_func(7)}`;
})
k8.addEventListener("click", function(){
    display.textContent=`${number_func(8)}`;
})
k9.addEventListener("click", function(){
    display.textContent=`${number_func(9)}`;
})
k0.addEventListener("click", function(){
    display.textContent=`${number_func(0)}`;
})
kclear.addEventListener("click",function(){
    clear_scr();
})
kmul.addEventListener("click", function(){
    display.textContent=`${number}*`;
    first_num=parseInt(number);
    operator="*";
    number='';
})
kdiv.addEventListener("click", function(){
    display.textContent=`${number}/`;
    first_num=parseInt(number);
    operator="/";
    number='';
})
kminus.addEventListener("click", function(){
    display.textContent=`${number}-`;
    first_num=parseInt(number);
    operator="-";
    number='';})
kplus.addEventListener("click",function(){
    display.textContent=`${number}+`;
    first_num=parseInt(number);
    operator="+";
    number='';
})
kequal.addEventListener("click",function(){
    equal();
})


function number_func(a){
    number=`${number}${a}`
    return number;
}
function clear_scr(){
    display.textContent="0"
    number="";
}
function plus(first, second){
    result=first+second;
    display.textContent=result; 
    clearnum();
}
function minus(first, second){
    result=first-second;
    display.textContent=result;
    clearnum(); 
}
function divide(first, second){
    result=first/second;
    display.textContent=result;
    clearnum(); 
}
function multiply(first, second){
    result=first*second;
    display.textContent=result; 
    clearnum();
}

function equal(){
    sec_num=parseInt(number);
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
function clearnum(){
    first_num="";
    sec_num="";
    result="";
    number="";
}
