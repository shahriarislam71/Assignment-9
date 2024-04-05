import { getStoredCart } from "../utils/fakeDb"

export const productData = async () => {
    const data = await fetch('jobdetails.json')
    const showdata = await data.json()

    const savedCart = getStoredCart()
    const initialCart = []
    for (const id in savedCart) {
        const foundProduct = showdata.find(product => parseInt(product.id) === parseInt(id))
        if (foundProduct) {
            initialCart.push(foundProduct)
        }
    }
    return { showdata, initialCart}
}

