function generatepassword(passwordlength,includelowercase,includenumbers,includesymbols,includeuppercase){
    const lowercasechars="abcdefghijklmnoqrstuvwxyz";
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars="0987654321";
    const symbols="!@#$%^&*()_+";
    let allowedchars=" ";
    let password=" ";

    allowedchars+=includelowercase?lowercasechars:"";
    allowedchars+=includeuppercase?uppercasechars:"";
    allowedchars+=includenumbers?numberchars:"";
    allowedchars+=includesymbols?symbols:"";
    console.log(allowedchars);

    if(passwordlength<=0){
        console.log("password length must be atleast one")
    }
    if(includelowercase===0 && includenumbers===0 && includesymbols===0 && includeuppercase===0){
        console.log("atlest one option must be true");
    }

    for(let i=0;i<passwordlength;i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length);
        password=password+allowedchars[randomindex];


    }


    return password;
}


const passwordlength=5;
const includelowercase=1;
const includeuppercase=1;
const includenumbers=1;
const includesymbols=1;
const password=generatepassword(passwordlength,includelowercase,includenumbers,includesymbols,includeuppercase);
console.log(`generated password:${password}`);
