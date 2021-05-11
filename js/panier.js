

main()

function main() {
    let panier = localStorage.getItem("panier");
    let panierJson = JSON.parse(panier);
}

cameraDetail.lenses.forEach(camera => {
    let chosenOption = document.createElement("option");
    document
        .getElementById("chosenLense")
        .appendChild(chosenOption).innerHTML = camera;
});

// articles.forEach(element => {
//         let object = document.createElement("li");
//         object.setAttribute("class", "objects");
        
//         document
//             .getElementById("ul")
//             .appendChild(object) = element;
            
//     });



//     var pannierStorage = [];
//     pannierStorage.push(addArticle);
//     console.table(pannierStorage);

//     pannierStorage.forEach(element) => {
//         console.log(element);
//         let list = document.createElement("li");
    
//         document
//             .getElementById("ul")
//             .appendChild(list);

        
        
//     });

//     panierStorage.forEach(element => {
//         let list = document.createElement("li");
//         console.log(element)
//         document
//             .getElementById("ul")
//             .appendChild(list).innerHTML = element;
//     });