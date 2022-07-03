import React from "react";
import Form from "../Form/Form";

/**
 * Define a Card that is used to display a game on its page
 * @arg game 
 *  call the game object to be used
 * @arg formInputs
 *  a list of inputs needed for that game
 * @arg onSubmit
 *  a function to execute the game code
 * @arg checkbox
 *  what type of checkBox needed for the game
 */

export function Card({ game, formInputs, onSubmit, checkBox }) {
    return (
        <div className="card my-2 mx-2">
            <h3 className="card-header bg-dark text-light">Let's read your message</h3>
            <div className="card-body">
                <p className="card-text">{game.instruction}</p>
                <Form formInputs={formInputs} checkBox={checkBox} onSubmit={onSubmit} />
            </div>
        </div>
    )
}