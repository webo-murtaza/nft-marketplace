import React, {useEffect} from "react";
import {Routes} from "./Routes";
import {BrowserRouter} from "react-router-dom";
import Web3 from "web3/dist/web3.min";

function App() {

    useEffect(() => {
        if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            window.ethereum.enable();
            return true;
        }
    }, []);

    return (
        <>
            <BrowserRouter basename="/">
                <Routes/>
            </BrowserRouter>
        </>
    );
}

export default App;
