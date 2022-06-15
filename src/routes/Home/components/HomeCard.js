import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../components/Button/Button"

export function HomeCard({ game }) {
    const history = useHistory();
    const style = { width: '18rem'}

    return (
        <div className="d-flex justify-content-center col-12 col-sm-6 col-lg-4">
            <div className="card my-3 mx-2" style={style}>
                <div className="card-body">
                    <h5 className="card-title text-center">{game.name}</h5>
                    <p className="card-text text-center">{game.description}</p>
                    <div className="d-flex justify-content-center">
                        <Button
                            className="btn btn-dark"
                            children={"Play Now"}
                            handleClick={() => {
                                history.push(`/games/${game.link}`)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}