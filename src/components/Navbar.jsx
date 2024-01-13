import React, { useState } from "react";
import "./Navbar.css";

export default function NavDisplay() {
    const pogCat = <a href = "#home">∧,,,,∧<br/>( ｡･o･)</a>;
    const cat0 = <a href = "#home">∧,,,,∧<br/>( ｡･ω･)</a>;
    const cat1 = <a href = "#home">∧,,,,∧<br/>( „• ᴗ •„)</a>;
    const cat2 = <a href = "#home">∧,,,,∧<br/>( ✧ω✧)</a>;
    const cat3 = <a href = "#home">∧,,,,∧<br/>(  *ˊ▽ˋ*)</a>;
    const cat4 = <a href = "#home">∧,,,,∧<br/>(  ◕‿◕)</a>;
    const catArray = [cat0, cat1, cat2, cat3, cat4, pogCat];

    const [cat, setCat] = React.useState(cat0);
    //const [prevCat, setPrevCat] = React.useState(-1);
    const [currCat, setCurrCat] = React.useState(0);

    const mouseDown = () => {
        setCat(catArray[5]);
    };

    const mouseUp = () => {
        setCat(catArray[0]);
    };

    const mouseHover = () => {
        const min = 0;
        const max = 4;
        //setPrevCat(currCat);
        let rand;
        do {
            rand = min + Math.round(Math.random() * (max - min));
        } 
        while (rand == currCat);
        setCurrCat(rand);
        setCat(catArray[currCat]);

        console.log(`rand: ${rand}, currCat: ${currCat}`);
    }

    return (<div className = "navbar">
        <ul className = "topbar">
            <li className = "homebutton" onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseEnter={mouseHover}>{cat}</li>
            <li className = "navbutton"><a href = "#projects">Projects</a></li>
            <li className = "navbutton"><a href = "#fun">Fun</a></li>
            <li className = "navbutton"><a href = "#about">About</a></li>       
        </ul>
    </div>)
}
