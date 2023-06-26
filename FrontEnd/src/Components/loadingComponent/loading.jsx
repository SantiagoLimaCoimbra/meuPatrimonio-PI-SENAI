import React from "react";
import "./loading.scss";

export default function Loading() {
    return (
        <div className="loadingPage">
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <span>Carregando</span>
            </div>
        </div>
    )
}