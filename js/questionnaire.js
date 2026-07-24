function envoyer(){


let data={

nom:
document.getElementById("nom").value,


telephone:
document.getElementById("telephone").value,


ville:
document.getElementById("ville").value,


service:
document.getElementById("service").value,


besoin:
document.getElementById("besoin").value

};


localStorage.setItem(
"demande",
JSON.stringify(data)
);


window.location.href="resultat.html";


}
