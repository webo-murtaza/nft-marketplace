import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as _redux from "./_redux";
import store, {persistor} from "./_redux/store";
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from "react-redux";
import axios from "axios";
import "./index.css";

_redux.setupAxios(axios, store);

ReactDOM.render(
    // <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App store={store} persistor={persistor}/>
            </PersistGate>
        </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);
