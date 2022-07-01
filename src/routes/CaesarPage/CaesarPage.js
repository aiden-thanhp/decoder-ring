import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Intro } from "../../components/Intro/Intro";
import { Output } from "../../components/Output/Output"
import { caesar } from "../../utils"
import { games } from "../../games"; 

export default function CaesarPage() {
    const gameId = 1;
    const game = games.find(game => game.id === gameId)
    const [output, setOutput] = useState("No message as of yet...");

    if (game) {
        const formInputs = game.formInputs;

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
    } else return "Loading game here..."
}