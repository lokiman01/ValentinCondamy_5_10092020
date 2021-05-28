main()
function main() {
   localStorage.removeItem("basket")
   const urlParams = window.location.search;
   const searchParams = new URLSearchParams(urlParams);
   const orderId = searchParams.get('orderId');
     
   let span = document.getElementById('confirmationBox')
   let p = document.createElement("div");
   let pTexte = document.createTextNode(''+'commande '+' #'+orderId);
   p.appendChild(pTexte);
   span.appendChild(p);
   p.setAttribute("class", "pOrderId");
   displayPrice()
}

function displayPrice() {

   const urlParamsPrice = window.location.search;
   const searchParamsPrice = new URLSearchParams(urlParamsPrice);
   const orderPrice = searchParamsPrice.get('orderPrice');

   let orderPriceBox = document.getElementById('orderPriceBox')
   let orderPricediv = document.createElement("div");
   let orderPriceTexte = document.createTextNode(''+'Total de votre commande '+orderPrice+' €' );

   orderPricediv.appendChild(orderPriceTexte);
   orderPriceBox.appendChild(orderPricediv);
   orderPricediv.setAttribute("class", "orderPrice");
}