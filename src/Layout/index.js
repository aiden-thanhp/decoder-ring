import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import { Home, PolybiusPage, CaesarPage, SubstitutionPage } from "../routes"

export default function Layout() {

    return (
        <div>
            <Header />
            <div className="container-fluid py-0 px-0">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/games/caesar-shift">
                        <CaesarPage />
                    </Route>
                    <Route exact path="/games/substitution-cipher">
                        <SubstitutionPage />
                    </Route>
                    <Route exact path="/games/polybius-square">
                        <PolybiusPage />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}