import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Intro } from "../../components/Intro/Intro";
import { readGame } from "../../utils/api"
import { Output } from "../../components/Output/Output"
import { substitution } from "../../utils"

export default function SubstitutionPage() {
    const gameId = 3;
    const [output, setOutput] = useState("No message as of yet...");
    const [game, setGame] = useState();
    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        readGame(gameId, signal).then((game) => setGame(game));
    }, [gameId])

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