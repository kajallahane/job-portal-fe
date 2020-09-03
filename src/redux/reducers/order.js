
const initialOrderState = {
    products: [],
    totalPrice: 0,
    totalQuanity: 0
}

const order = (state = initialOrderState, action) => {
    switch (action.type) {
        case 'STORE_PRODUCTS_IN_ORDER': {
            let newState = Object.assign({}, state);
            newState.products = action.products
            return newState;
        }
        case 'ADD_PRODUCT_TO_CART': {
            let productExists = false;
            let newState = Object.assign({}, state);
            let newProducts = newState.products.slice();
            if (action.product) {
                const MOQ = action.product.moq || 1;
                newProducts.map((product) => {
                    if (product.slug === action.product.slug) {
                        product.quantity += MOQ;
                        product.orderedPrice += (parseInt(product.price) * MOQ);

                        newState.totalQuanity += MOQ;
                        newState.totalPrice += (parseInt(product.price) * MOQ);
                        productExists = true;
                    }
                });

                if (productExists) {
                    newState.products = newProducts;
                    return newState;
                } else {
                    const MOQ = action.product.moq || 1;
                    action.product.quantity = MOQ;
                    action.product.orderedPrice = (parseInt(action.product.price) * MOQ);

                    newState.totalQuanity += MOQ;
                    newState.totalPrice += (parseInt(action.product.price) * MOQ);

                    newProducts.splice(newProducts.length, 1, action.product)
                    newState.products = newProducts;
                    return newState;
                }
            }
        }
        case 'DECREASE_QUANTITY_OF_PRODUCT_IN_CART': {

            let newState = Object.assign({}, state);
            let newProducts = newState.products.slice();
            newProducts.map((product) => {
                if (product.slug === action.id) {
                    product.quantity--;
                    product.orderedPrice -= parseInt(product.price)

                    newState.totalQuanity--;
                    newState.totalPrice -= parseInt(product.price);
                }
            });

            newState.products = newProducts;
            return newState;
        }
        case 'INCREASE_QUANTITY_OF_PRODUCT_IN_CART': {
            let newState = Object.assign({}, state);
            let newProducts = newState.products.slice();
            newProducts.map((product) => {
                if (product.slug === action.payload.id) {
                    product.quantity += action.payload.quantity;
                    product.orderedPrice += (parseInt(product.price) * action.payload.quantity)

                    newState.totalQuanity += action.payload.quantity;
                    newState.totalPrice += (parseInt(product.price) * action.payload.quantity);

                }
            });

            newState.products = newProducts;
            return newState;
        }
        case 'REMOVE_PRODUCT_FROM_CART': {
            const newProducts = state.products.filter(function (product) {
                return product.slug !== action.product.slug
            });
            state.totalPrice -= action.product.orderedPrice;
            state.totalQuanity -= action.product.quantity;

            return {
                ...state,
                products: newProducts
            }
        }
        case 'CLEAR_ORDER': {
            return Object.assign({}, initialOrderState);
        }
        default:
            return state
    }
}

export default order