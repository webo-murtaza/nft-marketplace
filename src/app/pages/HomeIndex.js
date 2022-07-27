import React from "react";
import {Header} from "../layouts/Header";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Card, Button} from 'react-bootstrap';
import Cookies from 'js-cookie';
import * as common from "../../_redux/common/actions";
import {Loader} from "../layouts/Loader";
import ShowMoreText from "react-show-more-text";

export function HomeIndex() {
    const dispatch = useDispatch();
    const history = useHistory();

    const products = useSelector(state => state.common.products);
    const loading = useSelector(state => state.common.loading);

    React.useEffect(() => {
        dispatch(common.getProducts(history));
    }, []);

    return (<>
            {loading && <Loader/>}
            <Header/>
            <div className="container mt-5">
                {Cookies.get('wallet_address') &&
                <div className="row my-5">
                    <div className="col-md-3">
                        <Button variant="primary" onClick={() => history.push('/create')}>Create Product</Button>
                    </div>
                </div>
                }

                <div className="row">
                    {(() => {
                            return products && products.length > 0
                                ? products.map((product, index) => (
                                    <div className="col-md-3 mb-5" key={index}>
                                        <Card className="item">
                                            <Card.Img variant="top"
                                                      src={product?.attachment}
                                                      style={{objectFit: 'cover', height: '200px'}}
                                                      className="img-thumbnail"/>
                                            <Card.Body style={{minHeight: '100px'}}>
                                                <Card.Title>{product?.name}</Card.Title>
                                                <div className='text-muted card-text'>
                                                    <ShowMoreText
                                                        lines={2}
                                                        more="Show more"
                                                        less="Show less"
                                                        className="content-css"
                                                        anchorClass="my-anchor-css-class"
                                                        expanded={false}
                                                        // width={250}
                                                        truncatedEndingComponent={"... "}
                                                    >
                                                        {product?.description}
                                                    </ShowMoreText>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))
                                : <div className="col-md-3">
                                    No record found, Please create your first product
                                </div>
                        }
                    )()}
                </div>
            </div>
        </>
    )
}
