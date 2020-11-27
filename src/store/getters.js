export const isLoggedIn = (state) => {
    return state.user.isLoggedIn;
}

export const cartCountItem = (state) => {
    return state.cart.length;
}

export const cartTotalPrice = (state) => {
    let total = 0;

    state.cart.forEach(item => {
        total += item.product.price * item.quantity;
    });

    return total;
}