import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Header} from "../layouts/Header";
import {Button, Card} from 'react-bootstrap';
import Cookies from "js-cookie";
import {serialize} from "object-to-formdata";
import * as common from "../../_redux/common/actions";
import {Loader} from "../layouts/Loader";

export function CreateProduct() {
    const dispatch = useDispatch();
    let history = useHistory()
    const contractId = "0xA694c459A58FCb59C89Eb8b754BBd703939b1973";
    const ABI = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "artist",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "tokenURI",
                    "type": "string"
                }
            ],
            "name": "ExtendedMint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    if (!Cookies.get('wallet_address')) {
        history.push('/');
    }

    const minting = async () => {
        if (window.web3) {
            const contractInstance = new window.web3.eth.Contract(ABI, contractId);
            const currentToken = await contractInstance.methods.totalSupply().call();
            const response = await contractInstance.methods
                .ExtendedMint(Cookies.get('wallet_address'), currentToken)
                .send({from: Cookies.get('wallet_address')})
                .on("receipt", (rcp) => console.log(rcp))
                .then((data) => {
                    return data;
                });
            return {
                token_id: currentToken,
                block_number: response.blockNumber,
                transaction_hash: response.transactionHash
            }
        }
    };

    const [name, setName] = React.useState('');
    const [attachment, setAttachment] = React.useState(null);
    const [previewAttachment, setPreviewAttachment] = React.useState(null);
    const [description, setDescription] = React.useState('');

    const loading = useSelector(state => state.common.loading);

    const submitHandler = () => {
        let wallet_address = Cookies.get('wallet_address');
        const formData = serialize({wallet_address, name, attachment, description})
        dispatch(common.create(formData, history)).then((response) => {
            minting(response?.data).then((blockchainResponse) => {
                dispatch(common.update(response?.data.product.id, blockchainResponse))
                history.push('/');
            });
        });
    }

    return (
        <>
            {loading && <Loader/>}
            <Header/>
            <div className="container mt-5" style={{width: '80%'}}>
                <div className="row my-5">
                    <div className="col-md-3">
                        <Button variant="secondary" onClick={() => history.push('/')}>Back</Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <Card>
                            <Card.Header>Create Product</Card.Header>
                            <Card.Body>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="" className="form-label">Name</label>
                                            <input type="text" className="form-control" value={name}
                                                   onChange={(e) => setName(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="" className="form-label">Attachment</label>
                                            <input type="file" className="form-control" value=""
                                                   onChange={(e) => {
                                                       const objectUrl = URL.createObjectURL(e.target.files[0])
                                                       setPreviewAttachment(objectUrl);
                                                       setAttachment(e.target.files[0]);
                                                   }}/>

                                            {previewAttachment && <><br/>
                                                <img src={previewAttachment} alt="" width={200}/></>}
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="" className="form-label">Description</label>
                                            <textarea name="" id="" cols="30" rows="10"
                                                      className="form-control"
                                                      value={description}
                                                      onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>

                            <Card.Footer>
                                <Button onClick={submitHandler}>Submit</Button>
                            </Card.Footer>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card>
                            <Card.Header>
                                About The Form
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted" style={{fontSize: "14px", lineHeight: "23px"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                                    <br/><br/>

                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting,
                                    remaining essentially unchanged.
                                </p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
