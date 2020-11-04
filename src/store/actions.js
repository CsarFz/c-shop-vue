import axios from 'axios';

export const getProducts = ({
    commit
}) => {
    axios.get('https://fakestoreapi.com/products').then(response => {
        commit('SET_PRODUCTS', response.data)
    })
}

export const setUser = ({
    commit
}, user) => {
    commit("SET_LOGGED_IN", user !== null);
    if (user) {
        commit("SET_USER", {
            email: user.username,
        });
    } else {
        commit("SET_USER", null);
    }
}