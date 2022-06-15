import React, { useState, useEffect } from "react";
import { Intro } from "../../components/Intro/Intro";
import { HomeCard } from "./components/HomeCard";
import { listGames } from "../../utils/api"

export default function Home() {
    const title = "Welcome to The Decoder Ring";
    const text = "Visit the Decoding Ring to find different encoding and decoding methods that would blows your mind.";

    const [gameList, setGameList] = useState();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        listGames(signal).then((games) => setGameList(games));
        return () => controller.abort();
    }, [])

    if (gameList) {
        return (
            <>
                <Intro title={title} text={text} />
                <div className="row mx-3">
                    {gameList.map((game) => {
                        return (
                            <HomeCard key={game.id} game={game} />
                        )
                    })}
                </div>
            </>
        )
    } else return "Loading game here..."
}