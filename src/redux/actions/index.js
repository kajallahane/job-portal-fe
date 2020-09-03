export const addProduct = product => ({
    type: 'ADD_PRODUCT_TO_CART',
    product
})

export const removeProductFromCart = product => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    product
})

export const decreaseQuantityOfProductInCart = id => ({
    type: 'DECREASE_QUANTITY_OF_PRODUCT_IN_CART',
    id
})

export const increseQuantityOfProductInCart = payload => ({
    type: 'INCREASE_QUANTITY_OF_PRODUCT_IN_CART',
    payload,
})

export const storeProductsInOrder = products => ({
    type: 'STORE_PRODUCTS_IN_ORDER',
    products
})

export const clearOrder = () => ({
    type: 'CLEAR_ORDER'
})
