import axios from "axios";
import Cookies from 'js-cookie';

export function login(payload) {
    return axios.post(`/login`, payload);
}

export function logout() {
    return true;
}
