import axios from "axios";

export function getProducts() {
    return axios.get(`/products`);
}

export function create(payload) {
    return axios.post(`/products`, payload, {
        'content-type': 'multipart/form-data'
    });
}