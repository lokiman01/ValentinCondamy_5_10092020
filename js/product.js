
main()

async function main() {
    displayCamerasDetails();
}



function getCamera(id) {

    return fetch(`http://localhost:3000/api/cameras/${id}`)

        .then(function (httpbodyResponse) {
            console.log(httpbodyResponse)
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

    const urlParams = window.location.search

    const searchParams = new URLSearchParams(urlParams)

    const productId = searchParams.get("id")

    const cameraDetail = await getCamera(productId);
    console.log(cameraDetail);

}

async function displayCamera(camera) {

    const detailCamera = document.getElementById('detail-camera');

    let cameraContentbox = document.createElement("div");
    let cameraContent = document.createElement("article");
    let cameratext = document.createElement("div");
    let cameraPicturebox = document.createElement("div");
    let cameraPicture = document.createElement("img");
    let cameraName = document.createElement("h2")
    let cameraPrice = document.createElement("p")
    let cameralinkBox = document.createElement("div");
    let cameralink = document.createElement("a")

    //nestings:

    listCamera.appendChild(cameraContentbox);
    cameraContentbox.appendChild(cameraContent);
    cameraContent.appendChild(cameraPicturebox);
    cameraPicturebox.appendChild(cameraPicture);
    cameraContent.appendChild(cameratext);
    cameratext.appendChild(cameraName);
    cameratext.appendChild(cameraPrice);
    cameratext.appendChild(cameralinkBox);
    cameralinkBox.appendChild(cameralink)

    // HTML tags:

    cameraContentbox.setAttribute("class", "camera_contentbox ");
    cameraContent.setAttribute("class", "camera_content");
    cameratext.setAttribute("class", "camera_text");
    cameraPicturebox.setAttribute("class", "camera_Picturebox");
    cameraPicture.setAttribute("alt", "Photo de la caméra");
    cameraName.setAttribute("class", "camera_name");
    cameraPrice.setAttribute("class", "camera_Price");
    cameralinkBox.setAttribute("class", "camera_linkbox");
    cameralink.setAttribute("href", "product.html?id=" + camera._id);
    cameralink.setAttribute("class", "camera_link")

   
    // content of tags:
    cameraPicture.src = camera.imageUrl;
    cameraName.textContent = camera.name;
    cameraPrice.textContent = camera.price / 100 + " €";
    cameralink.textContent = "voir la fiche produit";

}