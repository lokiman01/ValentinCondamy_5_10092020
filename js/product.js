const urlParams = window.location.search


const searchParams = new URLSearchParams(urlParams)
const productId = searchParams.get("id")

console.log(productId)

