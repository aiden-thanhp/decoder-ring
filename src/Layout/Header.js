import React from "react";
import logo from "../assets/Logo.png"

/**
 * Header of the webpage, it will be rendered on all webpage
 */

export default function Header() {
    return (
        <div className="sticky-top header">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-center">
                <a className="navbar-brand" href="/">
                    <img src={logo} width={200} alt="brand logo" />
                </a>
            </nav>
        </div>
    )
}