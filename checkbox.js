const checkbox=document.getElementById("checkbox");
const masterbtn=document.getElementById("masterbtn");
const visabtn=document.getElementById("visabtn");
const paypalbtn=document.getElementById("paypalbtn");
const submit=document.getElementById("submit");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");

submit.onclick=function(){
    if(checkbox.checked){
        p1.textContent="you are subscribed";
    }
    else{
        p1.textContent="you are not subscribed";
    }
    if(masterbtn.checked){
        p2.textContent="you chose master card to pay";

    }
    else if(visabtn.checked){
        p2.textContent="you chose visa card to pay";
    }
    else if(paypalbtn.checked){
        p2.textContent="you chose paypal to pay"
    }
    else{
        p2.textContent="you must select a payment type "
    }

}
