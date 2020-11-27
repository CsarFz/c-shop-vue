import axios from "axios";

const api = axios.create({
    baseURL: "https://8rj68a68ml.execute-api.us-east-1.amazonaws.com/default/"
})

export default api;