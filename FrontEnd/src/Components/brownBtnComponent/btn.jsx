import { React } from "react";
import '../../css/styles.scss';
import '../brownBtnComponent/btn.scss'


export default function(props) {

    return (
        <button 
            className="btn"
            type={props.type}>
                {props.btnMessage}
        </button>  
    );
}
