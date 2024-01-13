import "./Footer.css";

export default function Foot() {
    return (<div className = "foot">
        <ul className = "footlist">
            <li className = "foottext">Get in touch!</li>
            <li className = "foottext"><a className = "footlink" href = "mailto:nicolexcui@gmail.com">nicolexcui@gmail.com</a></li>
            <li className = "foottext"> // </li>
            <li className = "foottext"><a className = "footlink" href = "https://www.instagram.com/nicolecui_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li className = "foottext"> // </li>
            <li className = "foottext"><a className = "footlink" href = "https://www.linkedin.com/in/nicolexcui/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
    </div>)
}
