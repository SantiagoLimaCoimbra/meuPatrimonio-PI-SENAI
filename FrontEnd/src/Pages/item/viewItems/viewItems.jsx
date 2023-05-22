import { React } from "react";
import '../../../css/App.css'
import '../../../css/styles.scss';
import './viewItems.scss';

import Menu from '../../../Components/menuComponent/menu';
// import { Link } from "react-router-dom";

export default function viewItems() {

    return (
        <div className="viewItemsPage">
            <Menu />
            <div className="viewItems">
                <h1>Chegou</h1>
            </div>
        </div>

    );
}