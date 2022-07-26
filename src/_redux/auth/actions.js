import {AuthSlices} from "./slices";
import * as requestFromServer from "./cruds";
import Cookies from "js-cookie";

const {actions} = AuthSlices;

export const login = (payload) => dispatch => {
    dispatch(actions.startCall({}));
    return requestFromServer.login(payload)
        .then(response => {
            if (!response.data.success) {
                dispatch(actions.catchError({message: response.data.message}));
                return false;
            }

            dispatch(actions.login(response.data.data));
            return response.data;
        });
};

export const logout = () => dispatch => {
    dispatch(actions.startCall({}));

    return requestFromServer.logout()
        .then(response => {
            Cookies.remove('session_user_id');
            Cookies.remove('session_token');
            dispatch(actions.logout({}));
            return true;
        });
};
