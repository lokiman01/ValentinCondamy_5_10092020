
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
        <p>${cameraDetail.price / 100 + " €"}</p>
        <label for="Lense">Lentille(s):</label>
        <select name="Lense" id="chosenLense"></select>
        <button class="buttonPanier" id="panierButton" onclick="location.href='panier.html'" type="button"> Ajouter au panier
        </button>
        </div>`

    cameraDetail.lenses.forEach(camera => {
        let chosenOption = document.createElement("option");
        document
            .getElementById("chosenLense")
            .appendChild(chosenOption).innerHTML = camera;
    });

    const addCamera = document.getElementById("chosenLense")
    addCamera.addEventListener("click", async function () {
        const data = {
            cameraDetailName: document.getElementById("camera"),
            cameraDetailLenses: document.getElementById("camera").value,
        }

        let data_json = JSON.stringify(data)
        console.log(data);
        localStorage.setItem("objet", data_json);
    })


}

