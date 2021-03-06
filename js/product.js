
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

    const searchParams = new URLSearchParams(urlParams);

    const productId = searchParams.get('id');

    const cameraDetail = await getCamera(productId);

    document.getElementById('cameraProduct').innerHTML += `
        <div class="cameraProductBox">
            <img class="picture" src=${cameraDetail.imageUrl}>
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
        <input type="number" id="qteButton" name="" min="1" max="10" value="1">
        </div>`
    cameraDetail.lenses.forEach(camera => {
        let chosenOption = document.createElement("option");
        document
            .getElementById("chosenLense")
            .appendChild(chosenOption).innerHTML = camera;
    });
    const addCamera = document.getElementById("panierButton")
    addCamera.addEventListener("click", function addEventListener () {
        let basketStorage = localStorage.getItem("basket");
        if (basketStorage) {
            basketStorage = JSON.parse(basketStorage);
        }
        else {
            basketStorage = [];
        }
        const data = {
            lenses: document.getElementById("chosenLense").value,
            price: cameraDetail.price,
            name: cameraDetail.name,
            quantity: document.getElementById("qteButton").value,
            _id: cameraDetail._id,
        }
        basketStorage.push(data)
        let dataJson = JSON.stringify(basketStorage)
        localStorage.setItem("basket",dataJson);
    })
}

