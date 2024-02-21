import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import burgerIcon from '../icons/burger.svg';

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
    const cat6 = <text>&nbsp;∧,,,,∧<br/>( ≧▽≦)</text>;
    const cat7 = <text>&nbsp;∧,,,,∧<br/>( ๑˃ᴗ˂)</text>;
    const cat8 = <text>&nbsp;∧,,,,∧<br/>( *ˊᗜˋ*)</text>;
    const cat9 = <text>&nbsp;∧,,,,∧<br/>( ♡///♡)</text>;
    const cat10 = <text>&nbsp;∧,,,,∧<br/>( ｡¯ ³¯ ) ♪</text>;
    const cat11 = <text>&nbsp;∧,,,,∧<br/>( ๑`^´๑)</text>;
    const cat12 = <text>&nbsp;∧,,,,∧<br/>( ⊙_⊙)</text>;
    const cat13 = <text>&nbsp;∧,,,,∧<br/>( ｡ •̀ᴗ- )✧</text>;
    const cat14 = <text>&nbsp;∧,,,,∧<br/>( ◕ᴥ◕)</text>;
    const cat15 = <text>&nbsp;∧,,,,∧<br/>( ⓛᴥⓛ)</text>;
    const cat16 = <text>&nbsp;∧,,,,∧<br/>( ｡ಠᴥಠ)</text>;

    const catArray = [pogCat, cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13, cat14, cat15, cat16];

    const [cat, setCat] = React.useState(cat0);
    const [currCat, setCurrCat] = React.useState(0);

    const mouseDown = () => {
        setCat(catArray[0]);
    };

    const mouseUp = () => {
        setCat(catArray[1]);
    };

    const mouseHover = () => {
        const min = 1;
        const max = catArray.length - 1;

        let rand;
        do {
            rand = min + Math.round(Math.random() * (max - min));
        } 
        while (rand == currCat);
        setCurrCat(rand);
        setCat(catArray[currCat]);
    }

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
    <div className = "navbar">
        <ul className = "topbar">
            <div className="hamburger" onClick={toggleHamburger}>
                <img className="burger" src={burgerIcon} width="100" height="100"/>
            </div>
            <li className = "homebutton">
                <NavLink exact to="/" onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseEnter={mouseHover}>{cat}</NavLink>
            </li>
            <li className = "navbutton">
                <NavLink className = "navlink" to="/projects">Projects</NavLink>
            </li>
            {/*
            <li className = "navbutton">
                <NavLink className = "navlink" to="/fun">Fun</NavLink>
            </li>
            */}
            <li className = "navbutton">
                <NavLink className = "navlink" to="/about">About</NavLink>
            </li>       
        </ul>
    </div>
    )
}
