import React from "react";
import "./Intro.css"

/**
 * define an intro section for the Game Page
 * @arg title
 *  title of the game
 * @arg text
 *  brief description for the game
 */

export function Intro({ title, text }) {
    return (
        <div className="container-fluid view">
            <h1 className="text-white pt-4 text-center">{title}</h1>
            <h4 className="text-white pb-4 text-center container-sm">{text}</h4>
        </div>
    )
}