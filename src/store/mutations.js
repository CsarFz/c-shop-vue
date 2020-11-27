export const SET_LOGGED_IN = (state, value) => {
    state.user.isLoggedIn = value;
}

export const SET_USER = (state, data) => {
    state.user.data = data;
}

export const SET_USER_INFO = (state, info) => {
    state.user.info = info;
}

export const SET_PRODUCT = (state, product) => {
    state.product = product;
}

export const SET_PRODUCTS_SEARCH = (state, productsSearch) => {
    state.productsSearch = productsSearch;
}

export const ADD_TO_CART = (state, {
    product,
    quantity
}) => {
    let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
    });

    if (productInCart) {
        productInCart.quantity += quantity;
        return;
    }

    state.cart.push({
        product,
        quantity
    });
}

export const SET_CART = (state, products) => {
    state.cart = products;
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
    });
}