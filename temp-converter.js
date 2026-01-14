function convert(){
   
   
    if(document.getElementById("to faren").checked){
        let far=(document.getElementById("temp").value*(9/5))+32;
        document.getElementById("result").textContent=`the converted temp=${far} F`
    }
    else if(document.getElementById("to cel").checked){
        let cel=(document.getElementById("temp").value-32)*5/9;
        document.getElementById("result").textContent=`the converted temperature=${cel} C`

    }
    else{
        document.getElementById("result").textContent=`select a option`
    }
    
}
