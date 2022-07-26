import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {AuthSlices} from "./auth/slices";
import {CommonSlices} from "./common/slices";

const authPersistConfig = {
    key: 'auth',
    storage: storage
}

export const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, AuthSlices.reducer),
    common: CommonSlices.reducer,
});
