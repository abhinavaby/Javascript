
let count=0;
document.getElementById("increasebtn").onclick=function(){
    count++;
    document.getElementById("countlabel").textContent=count;

}
document.getElementById("decreasebtn").onclick=function(){
    count--;
    document.getElementById("countlabel").textContent=count;
    
}
document.getElementById("resetbtn").onclick=function(){
    count=0;
    document.getElementById("countlabel").textContent=count;
    
}

