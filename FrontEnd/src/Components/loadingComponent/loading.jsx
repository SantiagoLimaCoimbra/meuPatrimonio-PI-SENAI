import React from "react";
import "./loading.scss";

export default function Loading() {
    return (
        <div className="loadingPage">
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <span>Carregando</span>
            </div>
        </div>
    )
}