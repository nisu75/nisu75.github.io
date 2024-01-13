import React, { useState } from "react";
import "./Navbar.css";

export default function NavDisplay() {
    const notClicked = <a href = "#home">∧,,,,∧<br/>( ｡･ω･)</a>;
    const clicked = <a href = "#home">∧,,,,∧<br/>( ｡･o･)</a>;

    const [homeButton, setHomeButton] = React.useState(notClicked);

    const mouseDown = () => {
        setHomeButton(clicked);
    };

    const mouseUp = () => {
        setHomeButton(notClicked);
    };

    return (<div className = "navbar">
        <ul className = "topbar">
            <li className = "homebutton" onMouseDown={mouseDown} onMouseUp={mouseUp}>{homeButton}</li>
            <li className = "navbutton"><a href = "#projects">Projects</a></li>
            <li className = "navbutton"><a href = "#fun">Fun</a></li>
            <li className = "navbutton"><a href = "#about">About</a></li>       
        </ul>
    </div>)
}
