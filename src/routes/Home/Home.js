import React from "react";
import { Intro } from "../../components/Intro/Intro";
import { HomeCard } from "./components/HomeCard";
import { games } from "../../games"; 

export default function Home() {
    const gameList = games;

    const title = "Welcome to The Decoder Ring";
    const text = "Visit the Decoding Ring to find different encoding and decoding methods that would blows your mind.";

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
    } else return "There is no games..."
}