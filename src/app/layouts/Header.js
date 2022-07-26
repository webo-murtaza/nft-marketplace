import React, {useState} from "react";
import {Navbar, Button} from "react-bootstrap";
import Cookies from 'js-cookie';
import {useHistory} from "react-router-dom";

export function Header() {
    const history = useHistory();

    const btnhandler = () => {
        if (window.ethereum) {
            window.ethereum
                .request({method: "eth_requestAccounts"})
                .then((wallet_address) => {
                    Cookies.set('wallet_address', wallet_address[0]);
                    history.push('/');
                });
        } else {
            alert("install metamask extension!!");
        }
    };

    return (
        <>
            <Navbar style={{backgroundColor: "#616161", height: "80px"}}>
                <Navbar.Brand href="#home" style={{color: "white"}}>
                    <span style={{marginLeft: "20px", fontSize: "18px"}}>NFT Marketplace</span>
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{marginRight: "20px", color: 'white'}}>
                        {Cookies.get('wallet_address')
                            ? 'Wallet Address: ' + Cookies.get('wallet_address')
                            : <Button onClick={btnhandler} variant="primary">
                                Connect to wallet
                            </Button>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
