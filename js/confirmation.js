start()
function start(){
   let basket = localStorage.getItem("basket");
   // Réforme de l'objet avec .parse
   let basketArray = JSON.parse(basket);

   let confirmationSpan = document.getElementById("confirmationSpan");
   let p = document.createElement("p");
   let pTexte = document.createTextNode(basket._id);
   console.log(pTexte)

   p.appendChild(pTexte);
   confirmationSpan.appendChild(p);
   
}