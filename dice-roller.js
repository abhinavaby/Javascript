function rolldice(){
    const numofdice=document.getElementById("number").value;
    const result=document.getElementById("diceresult");
    const img=document.getElementById("diceimages");
    const values=[];
    const imgs=[];


    for(let i=0;i<numofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        imgs.push(`<img src="images/${value}.jpg`);
    }
    result.textContent=`dice:${values.join(" ;")}`;
    img.innerHTML=imgs.join(" ")



}