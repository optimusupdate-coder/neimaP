function verifierCode(){

let code=document.getElementById("code").value;

let codes={
"CLIENT-20260724":{
expiration: Date.now()+7200000
}
};


if(codes[code]){

localStorage.setItem(
"client_code",
code
);

localStorage.setItem(
"expiration",
codes[code].expiration
);


window.location.href="questionnaire.html";

}

else{

document.getElementById("message").innerHTML=
"Code invalide";

}

}
