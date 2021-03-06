import api from "./api";

export default {
    getUser(username) {
        return api.post("getuser", username);
    },
    editUser(info) {
        return api.post("edituser", info);
    },
    showProduct(id) {
        return api.post("products/id", {
            id_product: id
        });
    },
    search(query) {
        return api.post("search", query);
    },
    addToCart(data) {
        return api.post("cart", data);
    },
    getCartUser(username) {
        return api.post("getcart", username);
    },
    removeProductFromCart({id_cart, token}) {
        return api.post("remove", { id_cart, token });
    },
    checkout(cart) {
        return api.post("checkout", cart);
    },
    addAddress(address) {
        return api.post("add-address", address);
    }
}