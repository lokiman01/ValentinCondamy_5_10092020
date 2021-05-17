
start()

function start() {

    // Récupération de l'objet contenu dans localStorage
    let panier = localStorage.getItem("panier");
    // Réforme de l'objet avec .parse
    let panierArray = JSON.parse(panier);
    // lien HTML
    let body = document.getElementsByTagName("body")[0];
    // création d'un tableau "<table>" 
    let tbl = document.createElement("table");
    // création d'un <tbody> afin de regrouper les éléments <tr> afin de forme le corps du t 
    let tblBody = document.createElement("tbody")
    // création de la boucle index
    let total = 0 
    
    for (let index = 0; index < panierArray.length; index++) {
        // incrémentation
        const element = panierArray[index];
        // création d'une ligne "row"
        let row = document.createElement("tr");

        let cellName = document.createElement("td");
        let cellNameTexte = document.createTextNode(element.name);

        let cellPrice = document.createElement("td");
        let cellPriceTexte = document.createTextNode(element.price / 100 + " €");
    
        let cellLenses = document.createElement("td"); 
        let cellLensesTexte = document.createTextNode(element.lenses);
    
        let cellQuantity = document.createElement("td");
        let cellQuantityTexte = document.createTextNode(element.quantity);
    
        let cellSousTotal = document.createElement("td");
        let cellSousTotalTexte = document.createTextNode(element.quantity * element.price / 100 + " €");

        let cellButton = document.createElement("BUTTON");
        cellButton.innerHTML = '<button >X</button>';

        let pocket = element.quantity * (element.price / 100);
        total += pocket;

        cellName.appendChild(cellNameTexte);
        cellLenses.appendChild(cellLensesTexte);
        cellPrice.appendChild(cellPriceTexte);
        cellQuantity.appendChild(cellQuantityTexte);
        cellSousTotal.appendChild(cellSousTotalTexte);

        row.appendChild(cellName);
        row.appendChild(cellLenses);
        row.appendChild(cellPrice);
        row.appendChild(cellQuantity);
        row.appendChild(cellSousTotal);
        row.appendChild(cellButton);

        tblBody.appendChild(row);
    }

    let totalRow = document.createElement("tr");

    let cellTotal = document.createElement("td");
    let cellTotalTexte = document.createTextNode("Total: "+total+ " €");
    
    cellTotal.appendChild(cellTotalTexte);
    totalRow.appendChild(cellTotal)
    tblBody.appendChild(totalRow);

    console.log(total)
    //  <tbody> dans => <table>
    tbl.appendChild(tblBody);
    //  <table> dans => <body>
    body.appendChild(tbl);
    // un peu de css
    tbl.setAttribute("border", "1");
    
}

