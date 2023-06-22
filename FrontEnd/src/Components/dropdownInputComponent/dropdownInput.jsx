import React, { useState } from "react";
import '../../css/styles.scss';
import './dropdownInput.scss';


export default function({id, value, onChange, required, options}) {
  
    return (
      <div className="inputDiv"> 
        <select 
        className="input" 
        id={id} 
        value={value} 
        onChange={onChange}
        required={required}
        >
            <option value="">Opções</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
        </select>
      </div>
    );
  
}
