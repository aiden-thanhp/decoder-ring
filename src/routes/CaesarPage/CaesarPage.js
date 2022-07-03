import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Intro } from "../../components/Intro/Intro";
import { Output } from "../../components/Output/Output"
import { caesar } from "../../utils"
import { games } from "../../games"; 

// This is the game page for Caesar Shift, gameId 1, all comments are similar in other two games

export default function CaesarPage() {
    // find the game information in the game list
    const gameId = 1;
    const game = games.find(game => game.id === gameId)
    const [output, setOutput] = useState("No message as of yet...");
    
    // if gameId is wrong and no game is loaded, show a message to user
    if (game) {
        const formInputs = game.formInputs;

        // when user hit submit, call the function caesar
        function handleSubmit(event, form) {
            event.preventDefault();
            const result = caesar(String(form.message), parseInt(form.shiftNumber), !form.decode)
            setOutput(result);
        }

        return (
            <div>
                <Intro title={game.name} text={game.description} />
                <Card 
                    game={game}
                    formInputs={formInputs}
                    onSubmit={handleSubmit}
                    checkBox="decode"
                />
                <Output output={output} />
            </div>
        )
    } else return "Game is loading..."
}