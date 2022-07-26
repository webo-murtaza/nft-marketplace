import Cookies from 'js-cookie';
import Swal from "sweetalert2";

export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
        config => {
            config.baseURL = process.env.API_URL;
            config.headers['Content-Type'] = 'application/json';
            if (Cookies.get('session_token')) {
                config.headers = {
                    'Authorization': Cookies.get('session_token')
                }
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axios.interceptors.response.use(response => {
            return response;
        }, error => {
            return new Promise((resolve, reject) => {
                Swal.fire({
                    title: 'Error!',
                    html: 'Something went wrong.',
                    icon: 'error',
                    allowOutsideClick: false
                }).then(() => {
                    Swal.close();
                });

                return reject(error);
            });
        }
    );
}
