import { React } from "react";
import '../../css/styles.scss';
import './btnRed.scss'


export default function(props) {

    return (
        <button 
            className="btnRed"
            type={props.type}
            onClick={props.onClick}>
                {props.btnMessage}
        </button>  
    );
}
