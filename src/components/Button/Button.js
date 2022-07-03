import React from "react";

/**
 * Define button components that can be used throughout the project
 * @arg type
 *  the type of button, default as "button"
 * @arg className
 *  className that corrolates with Bootstrap Buttons
 *  default "btn btn-dark my-2 mr-3"
 * @arg children
 *  content of the button
 * @arg handleClick
 *  function to handle when button is clicked 
 */

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