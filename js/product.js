
main()

async function main() {
    displayCamerasDetails();
}


function getCamera(id) {

    return fetch(`http://localhost:3000/api/cameras/${id}`)

        .then(function (httpbodyResponse) {
            if (httpbodyResponse.status === 404) {
                throw new Error;
            }
            return httpbodyResponse.json()
        })

        .then(function (camera) {
            return camera

        })
}

async function displayCamerasDetails() {

    const urlParams = window.location.search;
    console.log(urlParams);

    const searchParams = new URLSearchParams(urlParams);
    console.log(searchParams);

    const productId = searchParams.get('id');
    console.log(productId);

    const cameraDetail = await getCamera(productId);
    console.log(cameraDetail);

    document.getElementById('cameraProduct').innerHTML += `
        <div class="cameraProductBox">
            <img src=${cameraDetail.imageUrl}>
        <div/>
        <div class="cameraDescriptionBox">
        <h2 id="camera"class="camera">${cameraDetail.name}</h2>
        <p>${cameraDetail.description}</p>
        <p id="cameraPrice">${cameraDetail.price / 100 + " €"}</p>
        <label for="Lense">Lentille(s):</label>
        <select name="Lense" id="chosenLense"></select>
        <button class="buttonPanier" id="panierButton" onclick="location.href='panier.html'" type="button"> Ajouter au panier
        </button>
        <label for="tentacles">Qté:</label>

        <input type="number" id="qteButton" name="" min="1" max="10">

        </div>`
    cameraDetail.lenses.forEach(camera => {
        let chosenOption = document.createElement("option");
        document
            .getElementById("chosenLense")
            .appendChild(chosenOption).innerHTML = camera;
    });

    cameraDetail.lenses.forEach(camera => {
        let chosenOption = document.createElement("input");
        document
            .getElementById("chosenLense")
            .appendChild(chosenOption).innerHTML = camera;
    });

    // cameraDetail.quantity.forEach(camera => {
    //     let saveQuantity = document.createElement("option");
    //     documents
    //         .getElementById("chosenQuantity")
    //         .appendChild(saveQuantity).innerHTML = camera;
    // });

    const addCamera = document.getElementById("panierButton")
    addCamera.addEventListener("click", function () {
        let panierStorage = localStorage.getItem("panier");

        if (panierStorage) {
            panierStorage = JSON.parse(panierStorage);
        }
        else {
            panierStorage = [];
        }


        const data = {
            lenses: document.getElementById("chosenLense").value,
            price: cameraDetail.price,
            name: cameraDetail.name,
            id: productId,
            quantity: document.getElementById("qteButton").value,
        }
        panierStorage.push(data)

        let dataJson = JSON.stringify(panierStorage)
        console.log(data);
        localStorage.setItem("panier",dataJson);

    })


}

