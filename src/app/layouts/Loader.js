import React from "react";
import loader from "../../_assets/images/loader.gif";

export function Loader() {
    return (
        <>
            <div className="loader">
                <div className="loader_inner">
                    <img src={loader} alt=""/>
                </div>
            </div>
        </>
    )
}
