import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Header} from "../layouts/Header";
import {Card, Button} from 'react-bootstrap';
import Cookies from "js-cookie";
import {serialize} from "object-to-formdata";
import * as common from "../../_redux/common/actions";
import {Loader} from "../layouts/Loader";

export function CreateProduct() {
    const dispatch = useDispatch();
    let history = useHistory()

    if (!Cookies.get('wallet_address')) {
        history.push('/');
    }

    const [name, setName] = React.useState('');
    const [attachment, setAttachment] = React.useState(null);
    const [previewAttachment, setPreviewAttachment] = React.useState(null);
    const [description, setDescription] = React.useState('');

    const loading = useSelector(state => state.common.loading);

    const submitHandler = () => {
        let wallet_address = Cookies.get('wallet_address');
        const formData = serialize({wallet_address, name, attachment, description})
        dispatch(common.create(formData, history))
            .then(() => {
                history.push('/');
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
