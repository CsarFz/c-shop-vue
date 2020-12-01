import functions from '../api/functions';
import swal from 'sweetalert';

export const getProduct = ({
    commit
}, id_product) => {
    functions.showProduct(id_product).then(response => {
        commit('SET_PRODUCT', response.data[0]);
    })
}

export const addProductToCart = ({
    commit
}, {
    product,
    username,
    quantity,
    token
}) => {
    functions.addToCart({
        id_product: product.id,
        id_client: username,
        token: token,
        quantity
    }).then(response => {
        const data = response.data;
        if (data.code === "403") {
            swal("Error 403", "No tiene permisos para añadir productos al carrito.", "error");
        } else {
            swal("¡Éxito!", `Se añadió el producto ${product.name} a su carrito.`, "success");
            commit('ADD_TO_CART', {
                product,
                quantity
            });
        }
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

        let arr = [];
        data.forEach((item) => {
            arr.push({
                product: {
                    id: item.id,
                    image: item.image,
                    name: item.name,
                    price: item.price,
                    id_cart: item.id_cart,
                },
                quantity: item.quantity
            })
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
}, { product, token }) => {
    functions.removeProductFromCart({
        id_cart: product.id_cart,
        token: token
    }).then(response => {
        const data = response.data;

        if (data.code === "403") {
            swal("Error 403", "No tiene permisos para eliminar el producto del carrito.", "error");
        } else {
            swal("¡Éxito!", `Se eliminó el producto ${product.name} satisfactoriamente.`, "success");
            commit("REMOVE_PRODUCT_FROM_CART", product);
        }
    });
}

export const setUser = ({
    commit
}, user) => {
    if (user) {
        commit("SET_LOGGED_IN", true);
        commit("SET_USER", {
            username: user.username,
            token: user.token
        });
    } else {
        commit("SET_USER", {});
        commit("SET_LOGGED_IN", false);
        commit("SET_USER_INFO", {});
    }
}

export const logout = ({commit}, token) => {
    functions.logout(token).then(response => {
        const logout = response.data.logout;
        
        if (logout) {
            swal("¡Éxito!", "Se cerró sesión satisfactoriamente.", "success");
            commit("SET_USER", {});
            commit("SET_LOGGED_IN", false);
            commit("SET_USER_INFO", {});
            commit("SET_CART", []);
        } else {
            swal("Error", "No se cerró sesión satisfactoriamente.", "error");
        }
    });
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
        const code = response.data.code;
        const info = response.data;

        if (success) {
            swal("¡Éxito!", "Se editaron los datos con éxito.", "success");
            commit("SET_USER_INFO", {
                name: info.name,
                lastName: info.lastName,
                username: info.email,
                phone: info.phone
            });
        } else if (code === "403") {
            swal("Error 403", "No tiene permisos para editar los datos.", "error");
        } else {
            swal("Error", "Hubo un error al editar los datos del usuario.", "error");
        }
    });
}

export const checkout = ({
    commit
}, {
    cart,
    address
}) => {
    commit("SET_CART", []);
    functions.checkout(cart);
    functions.addAddress(address);
}

export const checkoutUser = ({
    commit
}, cart) => {
    commit("SET_CART", []);
    functions.checkout(cart);
}

export const addAddress = (address) => {
    functions.addAddress(address).then(response => {
        const success = response.data.success;
        if (success) {
            swal("¡Éxito!", "Se añadió con éxito la dirección.", "success");
        }
    });
}

export const setLoadingStatus = ({ commit }, status) => {
    commit("SET_LOADING", status);
}