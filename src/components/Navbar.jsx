import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavDisplay() {
    /*
    const pogCat = <a href = "/">&nbsp;∧,,,,∧<br/>( ｡･o･)</a>;
    const cat0 = <a href = "/">&nbsp;∧,,,,∧<br/>( ｡･ω･)</a>;
    const cat1 = <a href = "/">&nbsp;∧,,,,∧<br/>( „• ᴗ •„)</a>;
    const cat2 = <a href = "/">&nbsp;∧,,,,∧<br/>( ✧ω✧)</a>;
    const cat3 = <a href = "/">&nbsp;∧,,,,∧<br/>(  *ˊ▽ˋ*)</a>;
    const cat4 = <a href = "/">&nbsp;∧,,,,∧<br/>(  ◕‿◕)</a>;
    const cat5 = <a href = "/">&nbsp;∧,,,,∧<br/>( ｡ -ω-)</a>;
    */
    const pogCat = <text>&nbsp;∧,,,,∧<br/>( ｡･o･)</text>;
    const cat0 = <text>&nbsp;∧,,,,∧<br/>( ｡･ω･)</text>;
    const cat1 = <text>&nbsp;∧,,,,∧<br/>( „• ᴗ •„)</text>;
    const cat2 = <text>&nbsp;∧,,,,∧<br/>( ✧ω✧)</text>;
    const cat3 = <text>&nbsp;∧,,,,∧<br/>(  *ˊ▽ˋ*)</text>;
    const cat4 = <text>&nbsp;∧,,,,∧<br/>(  ◕‿◕)</text>;
    const cat5 = <text>&nbsp;∧,,,,∧<br/>( ｡ -ω-)</text>;

    const catArray = [cat0, cat1, cat2, cat3, cat4, cat5, pogCat];

    const [cat, setCat] = React.useState(cat0);
    const [currCat, setCurrCat] = React.useState(0);

    const mouseDown = () => {
        setCat(catArray[catArray.length - 1]);
    };

    const mouseUp = () => {
        setCat(catArray[0]);
    };

    const mouseHover = () => {
        const min = 0;
        const max = catArray.length - 2;

        let rand;
        do {
            rand = min + Math.round(Math.random() * (max - min));
        } 
        while (rand == currCat);
        setCurrCat(rand);
        setCat(catArray[currCat]);
    }

    return (<div className = "navbar">
        <ul className = "topbar">
            <li className = "homebutton" onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseEnter={mouseHover}>
                <NavLink exact to="/">{cat}</NavLink>
            </li>
            <li className = "navbutton">
                <NavLink className = "navlink" to="/projects">Projects</NavLink>
            </li>
            <li className = "navbutton">
                <NavLink className = "navlink" to="/fun">Fun</NavLink>
            </li>
            <li className = "navbutton">
                <NavLink className = "navlink" to="/about">About</NavLink>
            </li>       
        </ul>
    </div>)
}
