import {React, useState} from "react";
import "./Input.css"

function Input( {error, disabled, helperText, startIcon, endIcon, value, size, fullWidth, multiline, row} ) {

    const [labelColor, setLabelColor] = useState("");
    const [isHover, setIsHover] = useState(false);

    const inputType = multiline ? 
    
            <textarea 

                className={`${disabled ? "disabled" : ""} ${startIcon ? "morePadding" : ""} 
                            ${fullWidth ? "full-width" : ""} `}
                data-type={error ? "errorType" : ""}
                rows={row} 
                placeholder="Placeholder" 
                onFocus={() => {
                    setLabelColor("focusDefaultColor");
                }}
                onBlur={() => {
                    setLabelColor("");
                }}
                onMouseEnter={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }} 
                disabled = {disabled ? true : false}
                value={value}
                />
            : 
                
            <input

                className={`${disabled ? "disabled" : ""} ${startIcon ? "morePadding" : ""} 
                            ${size === "sm" ? "small" : ""} ${fullWidth ? "full-width" : ""} `}
                data-type={error ? "errorType" : ""}
                onFocus={() => {
                    setLabelColor("focusDefaultColor");
                }}
                onBlur={() => {
                    setLabelColor("");
                }}
                onMouseEnter={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}                
                placeholder="Placeholder"
                disabled = {disabled ? true : false}
                value={value}
            >       
            </input>

    return (
        <div>
            <p className={`label  ${isHover ? "hoverColor" : (error ? "errorColor" : labelColor)}`}>Label</p>
            <span class={`material-symbols-outlined startIcon ${size === "sm" ? "smallIcon" : ""}`}>{startIcon}</span> 
            <span class={`material-symbols-outlined endIcon ${size === "sm" ? "smallIcon" : ""}`}>{endIcon}</span>

            {inputType}

            <p className={helperText ? `helperText ${error ? "errorColor" : labelColor} ${isHover ? "hoverColor" : "" }` : "" }>{helperText}</p> 
        </div>
    )
}

export default Input;