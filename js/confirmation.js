start()
function start() {
   const urlParams = window.location.search;
   const searchParams = new URLSearchParams(urlParams);
   const orderId = searchParams.get('orderId');
     
   let span = document.getElementById('confirmationBox')
   let p = document.createElement("div");
   let pTexte = document.createTextNode('FÉLICITATION ! N° DE COMMANDE'+' "'+orderId+'" ');

   p.appendChild(pTexte);
   span.appendChild(p);
   p.setAttribute("class", "pOrderId");
   
   console.log(orderId); 

}

