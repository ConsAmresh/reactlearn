import React from "react";

const Dropdown=({options, onSelectedChange})=>{

    const optionsData = options.map((option)=>{
        return (
        <option key={option.value}>{option.label}</option>
        );
    });


    return(
        <div>
         <select onChange={onSelectedChange}>{optionsData}</select>
        </div>
    )
}

export default Dropdown;