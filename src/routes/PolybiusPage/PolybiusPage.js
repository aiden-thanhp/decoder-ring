import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Intro } from "../../components/Intro/Intro";
import { readGame } from "../../utils/api"
import { Output } from "../../components/Output/Output"
import { polybius } from "../../utils"

export default function PolybiusPage() {
    const gameId = 2;
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
            const result = polybius(String(form.message), !form.decode)
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