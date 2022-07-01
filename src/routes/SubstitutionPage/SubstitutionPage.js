import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Intro } from "../../components/Intro/Intro";
import { Output } from "../../components/Output/Output"
import { substitution } from "../../utils"
import { games } from "../../games"; 

export default function SubstitutionPage() {
    const gameId = 3;
    const game = games.find(game => game.id === gameId)
    const [output, setOutput] = useState("No message as of yet...");
    
    if (game) {
        const formInputs = game.formInputs;

        function handleSubmit(event, form) {
            event.preventDefault();
            const result = substitution(String(form.message), String(form.alphabetKey), !form.decode);
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