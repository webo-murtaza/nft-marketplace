import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {HomeIndex} from "./pages/HomeIndex";
import {ErrorPage} from "./pages/ErrorPage";
import {CreateProduct} from "./pages/CreateProduct";

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={HomeIndex}/>
            <Route exact path="/create" component={CreateProduct}/>
            <Route exact path="/error" component={ErrorPage}/>
            <Redirect to='/error'/>
        </Switch>
    );
}
