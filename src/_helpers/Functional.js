import React from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export const isUserLoggedIn = () => {
    return !!Cookies.get('session_token');
}

export const handleNotificationPrompt = (title, message, icon, history, redirect_to = '') => {
    Swal.fire({
        title: title,
        html: message,
        icon: icon,
        allowOutsideClick: false
    }).then(() => {
        Swal.close();
        if (redirect_to !== '') {
            history.push(redirect_to);
        }
    });
}