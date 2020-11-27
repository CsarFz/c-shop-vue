import functions from '../api/functions';

export const getProduct = ({
    commit
}, id_product) => {
    functions.showProduct(id_product).then(response => {
        commit('SET_PRODUCT', response.data[0]);
    })
}

export const searchProducts = ({
    commit
}, {
    query
}) => {
    functions.search({
        query
    }).then(response => {
        commit('SET_PRODUCTS_SEARCH', response.data);
    })
}

export const addProductToCart = ({
    commit
}, {
    product,
    username,
    quantity
}) => {
    commit('ADD_TO_CART', {
        product,
        quantity
    });

    functions.addToCart({
        id_product: product.id,
        id_client: username,
        quantity
    });
}

export const getCart = ({
    commit
}, {
    username
}) => {
    functions.getCartUser({
        username
    }).then(response => {
        const data = response.data;
        let ids = [];

        data.forEach(product => {
            ids.push(product.id)
        });
        ids = [...new Set(ids)];

        let arr = [];
        ids.forEach(id => {
            let obj = {
                quantity: 0
            };
            data.forEach((item, idx) => {
                if (id === item.id) {
                    obj.product = {
                        id: item.id,
                        image: item.image,
                        name: item.name,
                        price: item.price,
                        id_cart: item.id_cart
                    };
                    obj.quantity++;
                }

                if (idx === data.length - 1) {
                    arr.push(obj)
                }
            });
        });

        commit("SET_CART", arr)
    })
}

export const setCart = ({
    commit
}, user) => {
    if (!user) {
        commit("SET_CART", [])
    }
}

export const removeProduct = ({
    commit
}, product) => {
    commit("REMOVE_PRODUCT_FROM_CART", product);
    functions.removeProductFromCart({
        id_cart: product.id_cart
    });
}

export const setUser = ({
    commit
}, user) => {
    commit("SET_LOGGED_IN", user !== null);
    if (user) {
        commit("SET_USER", {
            username: user.username,
            token: user.token
        });
    } else {
        commit("SET_USER", null);
    }
}

export const getUser = ({
    commit
}, username) => {
    functions.getUser(username).then(response => {
        const data = response.data[0];
        commit("SET_USER_INFO", {
            name: data.name,
            lastName: data.lastName,
            username: data.email,
            phone: data.phone
        });
    })
}

export const editUser = ({
    commit
}, info) => {
    functions.editUser(info).then(response => {
        const success = response.data.success;
        const info = response.data;
        console.log(response);
        if (success === "true") {
            commit("SET_USER_INFO", {
                name: info.name,
                lastName: info.lastName,
                username: info.email,
                phone: info.phone
            });
        }
    });
}