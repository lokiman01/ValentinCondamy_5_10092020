
start()

function start() {

    // Récupération de l'objet contenu dans localStorage
    let panier = localStorage.getItem("panier");
    // Réforme de l'objet avec .parse
    let panierArray = JSON.parse(panier);
    console.log(panierArray);
    // lien HTML
    var body = document.getElementsByTagName("body")[0];
    // création d'un tableau "<table>" 
    var tbl = document.createElement("table");
    // création d'un <tbody> afin de regrouper les éléments <tr> afin de forme le corps du t 
    var tblBody = document.createElement("tbody")
    // création de la boucle index
    for (let index = 0; index < panierArray.length; index++) {
        // incrémentation
        const element = panierArray[index];
        // création d'une ligne "row"
        var row = document.createElement("tr");
  
      
        // Création de l'element <td> 
        var cellName = document.createElement("td");
        // insertion du texte depuis le tableau
        var cellNameTexte = document.createTextNode(element.name);
        // Création de l'element <td> 
        var cellLenses = document.createElement("td");
        // insertion du texte depuis le tableau
        var cellLensesTexte = document.createTextNode(element.lenses);
        // Création de l'element <td>   
        var cellPrice = document.createElement("td");
        // insertion du texte depuis le tableau
        var cellPriceTexte = document.createTextNode(element.price / 100 + " €");
        // Création de l'element <td> 
        var cellLenses = document.createElement("td");
        // insertion du texte depuis le tableau
        var cellLensesTexte = document.createTextNode(element.lenses);
        // Création de l'element <td> 
        var cellQuantity = document.createElement("td");
        // insertion du texte depuis le tableau
        var cellQuantityTexte = document.createTextNode(element.quantity);
        // Création de l'element <td> 
        var cellTotal = document.createElement("td");
        // insertion du texte depuis le tableau
        var cellTotalTexte = document.createTextNode(element.quantity * element.price / 100 + " €" );

        cellName.appendChild(cellNameTexte);
        cellLenses.appendChild(cellLensesTexte);
        cellPrice.appendChild(cellPriceTexte);
        cellQuantity.appendChild(cellQuantityTexte);
        cellTotal.appendChild(cellTotalTexte);

        row.appendChild(cellName);
        row.appendChild(cellLenses);
        row.appendChild(cellPrice);
        row.appendChild(cellQuantity);
        row.appendChild(cellTotal);
   
        tblBody.appendChild(row);
    }
  
    //  <tbody> dans => <table>
    tbl.appendChild(tblBody);
    //  <table> dans => <body>
    body.appendChild(tbl);
    // un peu de css
    tbl.setAttribute("border", "2");
    
  }

