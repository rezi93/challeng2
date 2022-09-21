let holder=document.getElementById("cardholdername");
let numb=document.getElementById("cardnumber");
let mOnth=document.getElementById("month");
let yEar=document.getElementById("year");
let cvc=document.getElementById("cvccard");
let subm=document.getElementById("submit");
let display=document.querySelector(".cardholder");
let displaynumber=document.querySelector(".card-number");
let month=document.querySelector(".date-month");
let year=document.querySelector(".date-year")
let cardCvc=document.querySelector(".cvc");
let details=document.querySelector(".carddetails");
let thank=document.querySelector(".thank");
let conteniu=document.getElementById("Cont");
let form=document.getElementById("form");
let erormm=document.querySelector(".errors-MM");
let eroryy=document.querySelector(".errors-yy");
let btn=document.getElementById("submit");


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

function innputmonth(){
    if(mOnth.value==""){
        month.innerHTML='00';
    }else{
        month.innerHTML=mOnth.value;
    }
}

function innputyear(){
    if(yEar.value==""){
        year.innerHTML='00';
    }else{
        year.innerHTML=yEar.value;
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


function massvalidate(){
    function validatename(){
        let cardHolder=/^[A-Z a-z]+$/;
        let errormsg=document.querySelector(".errors");
        if(holder.value.match(cardHolder)){
            errormsg.textContent="";

        }else{
            errormsg.innerHTML='please enter name';
        }
    }
}
function cardnumbvalidation(){
    let erornum=document.querySelector('.errors-num');
    if(numb.value.length>0 && numb.value.length<16){
        erornum.innerHTML='wrong format!';
    }else if(numb.value==""){
        erornum.innerHTML='can not be blank!';
    }else{
        erornum.innerHTML="";
    }
}
function validateDate(){
    let dAte=/^(0[0-9]|1[1-2]){2}$/;
    let expYear=/^[0-9][0-2]{4}$/;
 if(mOnth.value.match(dAte)){
    erormm.innerHTML="";
 }else if(mOnth.value=""){
    erormm.innerHTML='can not be blank';
 }else{
    erormm.innerHTML="wrong format!";
 }

}

if(yEar.value.match(expYear)){
    eroryy.innerHTML="";
}else if(mOnth.value=""){
   eroryy.innerHTML='can not be blank';
}else{
   eroryy.innerHTML="wrong format!";
}

function validatecvc(){
    let erorcvc=document.querySelector(".errors-cvc");
    let cvcexp=/^[0-9]{3}$/;
    if(cvc.value===""){
        erorcvc.innerHTML='can not be blank!';
    }else if(cvcvalue.match(cvcexp)){
        erorcvc.innerHTML="";
    }else{
        erorcvc.innerHTML='wrong format!'
    }
}

validatename();
cardnumbvalidation();
validateDate();
validatecvc();
}

btn.addEventListener("click", function(){
    massvalidate();
    if(massvalidate()==false){
        event.preventDefault();
    }else{
        event.preventDefault();
    }
    form.classList.add("hiden");
    thank.classList.remove("hiden");
});

conteniu.addEventListener("click",function(){
    event.preventDefault();
    thank.classList.add("hiden");
    form.classList.remove("hiden");
});



