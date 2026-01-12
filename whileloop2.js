let isloggedin=false;
let username;
let password;
while(!isloggedin){
    username=window.prompt("enter your user name: ");
    password=window.prompt("enter the password: ");
    if(username=="appu123" && password=="1234"){
        isloggedin=true
    }
    else{
        window.alert("wrong attributes")
    }


}
window.alert(`welcome back ${username} `)