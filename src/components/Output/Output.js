import React from "react";

export function Output({ output="No message as of yet..."}) {
    return (
        <div className="card my-4 mx-2">
            <h3 className="card-header bg-dark text-light">Output</h3>
            <div className="card-body">
                <p className="card-text">{output}</p>
            </div>
        </div>
    )
}
