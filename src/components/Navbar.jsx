import "./Navbar.css";

export default function NavDisplay() {
    return (<div className = "navbar">
        <ul className = "topbar">
            <li className = "homebutton"><a href = "#home">∧,,,,∧<br></br>( ｡･ω･)</a></li>
            <li className = "navbutton"><a href = "#projects">Projects</a></li>
            <li className = "navbutton"><a href = "#fun">Fun</a></li>
            <li className = "navbutton"><a href = "#about">About</a></li>       
        </ul>
    </div>)
}
