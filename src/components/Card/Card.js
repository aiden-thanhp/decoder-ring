import React from "react";
import Form from "../Form/Form";

export function Card({ game, formInputs, onSubmit, checkBox="true" }) {
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