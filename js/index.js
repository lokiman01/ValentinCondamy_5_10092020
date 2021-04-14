


main()

async function main() {
    const listCamera = await getCameras()
    
    listCamera.forEach(element => {
        console.log(element)
        displayCamera(element)
    });
}





function getCameras() {

    return fetch("http://localhost:3000/api/cameras")
        .then(function (httpbodyResponse) {
            return httpbodyResponse.json()
        })
        .then(function (articles) {
            return articles
        })
        
}


async function displayCamera(camera) {

    const listCamera = document.getElementById('list-camera');

    let cameraContentbox = document.createElement("div");
    let cameraContent = document.createElement("article");
    let cameraDescription = document.createElement("div");
    let cameraPicturebox = document.createElement("div");
    let cameraPicture = document.createElement("img");
    let cameraName = document.createElement("h2")
    let cameraPrice = document.createElement("p")
    let cameraActionBox = document.createElement("div");
    let cameraAction = document.createElement("a")

    //nestings:

    listCamera.appendChild(cameraContentbox);
    cameraContentbox.appendChild(cameraContent);
    cameraContent.appendChild(cameraPicturebox);
    cameraPicturebox.appendChild(cameraPicture);
    cameraContent.appendChild(cameraDescription);
    cameraDescription.appendChild(cameraName);
    cameraDescription.appendChild(cameraPrice);
    cameraDescription.appendChild(cameraActionBox);
    cameraActionBox.appendChild(cameraAction)

    // HTML tags:

    cameraContentbox.setAttribute("class", "camera_contentbox ");
    cameraContent.setAttribute("class", "camera_content");
    cameraDescription.setAttribute("class", "camera_description");
    cameraPicturebox.setAttribute("class", "camera_Picturebox");
    cameraPicture.setAttribute("alt", "Photo de la caméra");
    cameraName.setAttribute("class", "camera_name");
    cameraPrice.setAttribute("class", "cameraPrice");
    cameraActionBox.setAttribute("class", "camera_actionbox");
    cameraAction.setAttribute("href", "product.html?id=" + camera._id);
    cameraAction.setAttribute("class", "camera_action")

   
    // content of tags:
    cameraPicture.src = camera.imageUrl;
    cameraName.textContent = camera.name;
    cameraPrice.textContent = camera.price / 100 + " euros";
    cameraAction.textContent = "voir la fiche du produit";

}