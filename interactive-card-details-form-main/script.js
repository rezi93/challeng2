let holder=document.querySelector(".labelclas");
let numb=document.querySelector(".labelnum");
let dat=document.querySelector(".date");
let cvc=document.querySelector(".cardcvc");
let subm=document.getElementById("submit");
let display=document.querySelector(".cardholder");
let displaynumber=document.querySelector(".card-number");
let month=document.querySelector(".monthyear");
let cardCvc=document.querySelector(".cvc");
let details=document.querySelector(".carddetails");
let thank=document.querySelector(".thank");
let conteniu=document.getElementById("Continue");
let form=document.getElementById("form");


function innputName(){
    let erors={};
    display.innerHTML=holder.value;
    thank.innerHTML='thank you ${holder.value}';
    if(holder=="" ||holder.length<7){
        erors.holder='username can not be empty and must be then 7 charaqters'
    }
}

function innputCardNum(){
    let cardnumberInput=numb.value;
    let formatenumber=cardnumberInput.replace(/[^\d]/g,"");
    formatenumber=formatenumber.substring(0,16);
    let numbersection=formatenumber.match(/\d{1,4}/g);
    if(numbersection==!null){
        formatenumber=numbersection.join("");
    }
    if(cardnumberInput==!formatenumber){
        numb.value=formatenumber
    }
    displaynumber.innerHTML=numb.value;
    if(numb.value===""){
        displaynumber.innerHTML=numb.placeholder;
    }
}

function innputdata(){
    if(dat.value==""){
        month.innerHTML='00/00';
    }else{
        month.innerHTML=dat.value;
    }
}
function inputcvc(){
    let formatecvc=cvc.value;
    formatecvc=formatecvc.substring(0,3);
    cvc.value=formatecvc;
    if(cvc.value===""){
     cardCvc.innerHTML="000";
    }else{
        cardCvc.innerHTML=cvc.value;
    }
}

function validatecard(){
    let numberror=document.querySelector(".errors-num");
    if(numb.value.length=0 & numb.value.length<16){
        numberror.innerHTML='wrong format';
    }else if(numb.value=""){
      numberror.innerHTML="can not be blank!"
    }else{
        numberror.innerHTML="";
    }

}
