type product = {
    item: string,
    quantity: number
}

function getProduct() : Promise<product> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve({item:"apple", quantity: 2})}, 2000)
    })
}

function caculatePrice(product: product) : Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(product.quantity * 10),3000)
    } ) 
}

async function displayData() {
    try
    {
        const product = await getProduct()
        console.log(`product: `, product)

        const price = await caculatePrice(product)
        console.log(`price: `, price)
    } catch (message) {
        console.log(`error: `, message)
    }
}

// Chain Promise example
function displayDataChain(){
    getProduct().then(product => {
        console.log("product: ", product)
        return caculatePrice(product)
    })
    .then(price => {
        console.log("price: ", price)
    })
    .catch(message => {
        console.log("Error: ", message)
    })
}

displayData()
displayDataChain()
