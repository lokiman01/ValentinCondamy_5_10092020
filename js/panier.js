

main()

function main() {
    let panier = localStorage.getItem("panier");
    // localStorage.clear();
    console.log(panier)
    let panierJson = JSON.parse(panier);


    // panierJson = document.createElement("li");
    // console.log(panierJson)
    // document  
    //  .getElementById("displayPanier");
    displayPaniers()

} 


