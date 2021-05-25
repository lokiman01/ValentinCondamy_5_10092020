
start()

function start() {

    // Récupération de l'objet contenu dans localStorage
    let basket = localStorage.getItem("basket");
    // Réforme de l'objet avec .parse
    let basketArray = JSON.parse(basket);
    // lien HTML
    let table = document.getElementById("table");
    // création d'un tableau "<table>" 
    let tbl = document.createElement("table");
    // création d'un <tbody> afin de regrouper les éléments <tr> afin de forme le corps du t 
    let tblBody = document.createElement("tbody")
    // création de la boucle index
    let total = 0

    basketArray = basketArray.map((product, index) => {
        product.id_ = index
        return product
    })

    let dataJson = JSON.stringify(basketArray)
    localStorage.setItem("basket", dataJson);

    for (let i = 0; i < basketArray.length; i++) {
        // incrémentation
        const element = basketArray[i];
        // création d'une ligne "row"
        let row = document.createElement("tr");
        row.dataset.id_ = i;

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
        let cellButtonTexte = document.createTextNode('X');
        cellButton.setAttribute("class", "cellButton");

        let pocket = element.quantity * (element.price / 100);
        total += pocket;

        cellName.appendChild(cellNameTexte);
        cellLenses.appendChild(cellLensesTexte);
        cellPrice.appendChild(cellPriceTexte);
        cellQuantity.appendChild(cellQuantityTexte);
        cellSousTotal.appendChild(cellSousTotalTexte);
        cellButton.appendChild(cellButtonTexte);

        row.appendChild(cellName);
        row.appendChild(cellLenses);
        row.appendChild(cellPrice);
        row.appendChild(cellQuantity);
        row.appendChild(cellSousTotal);
        row.appendChild(cellButton);

        tblBody.appendChild(row);

        cellButton.addEventListener("click", function () {
            const indextodelet = basketArray.findIndex((product) => product.id_ == row.dataset.id_)
            basketArray.splice(indextodelet, 1)

            tbl.deleteRow(indextodelet);
            let dataJson_ = JSON.stringify(basketArray)
            console.log(basketArray)
            localStorage.setItem("basket", dataJson_);
            window.refresh(tbl);

        })
    }

    let totalRow = document.createElement("tr");
    let cellTotal = document.createElement("td");
    let cellTotalTexte = document.createTextNode("Total: " + total + " €");
    cellTotal.setAttribute("class", "cellTotal");

    cellTotal.appendChild(cellTotalTexte);
    totalRow.appendChild(cellTotal)
    tblBody.appendChild(totalRow);

    tbl.appendChild(tblBody);

    table.appendChild(tbl);

    tbl.setAttribute("border", "1");

    let formData = document.querySelector("form");

    formData.addEventListener("submit", getForm);

    async function getForm(e) {
        e.preventDefault();
        let contact = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            city: document.getElementById("firstName").value,
            address: document.getElementById("address").value,
            email: document.getElementById("email").value,
        }

        let products = getProductsId()

        const bodyorder = { contact: contact, products: products }

        const resolved = await sendOrder(bodyorder)
        window.location.href = "confirmation.html?orderId=" + resolved.orderId
    }

    function getProductsId() {
        const output = [];
        basketArray.forEach(element => {
            output.push(element._id)
        });
        return output
    }

    function sendOrder(order) {
        const postInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)

        }

        return fetch(`http://localhost:3000/api/cameras/order`, postInit)

            .then(function (httpbodyResponse) {
                if (httpbodyResponse.status === 404) {
                    throw new Error;
                }
                return httpbodyResponse.json()
            })

            .then(function (resolved) {
                return resolved

            })
            .catch(function (error) {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message)

            })
    }
}

