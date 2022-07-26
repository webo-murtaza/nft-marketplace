import {CommonSlices} from "./slices";
import * as requestFromServer from "./cruds";
import {handleNotificationPrompt} from "../../_helpers";

const {actions} = CommonSlices;

export const getProducts = (history) => dispatch => {
    dispatch(actions.startCall({}));

    return requestFromServer.getProducts()
        .then(response => {
            if (!response.data.success) {
                dispatch(actions.catchError({message: response.data.message}));
                handleNotificationPrompt('Error!', response.data.message, 'error', history, '/');
                return false;
            }
            
            dispatch(actions.products(response.data.data));
            // handleNotificationPrompt('Success!', response.data.message, 'success');
            return response.data;
        });
};

export const create = (payload, history) => dispatch => {
    dispatch(actions.startCall({}));

    return requestFromServer.create(payload)
        .then(response => {
            if (!response.data.success) {
                dispatch(actions.catchError({message: response.data.message}));
                handleNotificationPrompt('Error!', response.data.message, 'error', history, '/');
                return false;
            }

            // handleNotificationPrompt('Success!', response.data.message, 'success');
            return response.data;
        });
};