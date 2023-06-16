import React from "react";
import '../../css/styles.scss';
import '../inputComponent/input.scss'
import { IMaskInput } from "react-imask";


export default function(props) {

    return (
        <div className="inputDiv">
            <IMaskInput 
                type={props.type} 
                className="input" 
                // mask={props.mask}
                placeholder={props.placeholder} 
                id={props.id}
                name={props.name}
                value={props.value}
                required={props.required}
                onChange={props.onChange} 
            />
            <img src={props.img} />       
        </div>
    );
}
