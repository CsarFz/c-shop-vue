export const SET_LOGGED_IN = (state, value) => {
    state.user.isLoggedIn = value;
}

export const SET_USER = (state, data) => {
    state.user.data = data;
}

export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

