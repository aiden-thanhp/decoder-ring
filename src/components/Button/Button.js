import React from "react";

export default function Button({ 
    type="button",
    className="btn btn-dark my-2 mr-3",
    children,
    handleClick
 }) {
    return (
        <button type={type} className={className} onClick={handleClick}>{children}</button>
    )
}