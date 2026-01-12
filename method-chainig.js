//calling one method after another in one continuous line of code


//without method chaining
let username=window.prompt("enter the user name: ");
username=username.trim();
let firstletter=username[0];
firstletter=firstletter.toUpperCase();
let extra=username.slice(1);
extra=extra.toLowerCase();
let usernamee=firstletter+extra;
console.log(usernamee);


//with method chaining
let usernam=window.prompt("enter the user name: ");
usernam=usernam.trim().charAt(0).toUpperCase()+usernam.slice(1).toLowerCase();
console.log(usernam);
