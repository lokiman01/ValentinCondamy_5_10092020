

main()

function main() {
    let panier = localStorage.getItem("panier");
    localStorage.clear();
    console.log(panier)
    let panierJson = JSON.parse(panier);
    console.log(panierJson)
    console.table(panierJson);
    
    var addArticle = [
        panierJson.Name,
        panierJson.Lenses,
        panierJson.Price,
    ];
    var pannierStorage = [];

    pannierStorage.push(addArticle)
    

    let panierStorageJSON = JSON.stringify(pannierStorage)
    console.table(pannierStorage)
    localStorage.setItem("pannierTotal",pannierStorage)


   ;
}