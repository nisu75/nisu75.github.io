import "./Footer.css";
import emailIcon from '../icons/email.svg';
import instaIcon from '../icons/instagram.svg';
import linkedinIcon from '../icons/linkedin.svg';

export default function Foot() {
    return (<div className="foot">
        <ul className="footlist">
            <li className="touchfoot">Get in touch!</li>
            <ul className="footlinklist">
                <li className="foottext"><a className="footlink" href="mailto:nicolexcui@gmail.com">nicolexcui@gmail.com</a></li>
                <li className="foottext"> // </li>
                <li className="foottext"><a className="footlink" href="https://www.instagram.com/nicolecui_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li className="foottext"> // </li>
                <li className="foottext"><a className="footlink" href="https://www.linkedin.com/in/nicolexcui/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <ul className="footiconlist">
                <li className = "footicon">
                    <a href="mailto:nicolexcui@gmail.com">
                        <img className="email" src={emailIcon} />
                    </a>
                </li>
                <li className = "footicon">
                    <a href="https://www.instagram.com/nicolecui_/" target="_blank" rel="noopener noreferrer">
                        <img className="insta" src={instaIcon} />
                    </a>
                </li>
                <li className = "footicon">
                <a className="footlink" href="https://www.linkedin.com/in/nicolexcui/" target="_blank" rel="noopener noreferrer">
                        <img className="linkedin" src={linkedinIcon} />
                    </a>
                </li>
            </ul>
        </ul>
    </div>)
}
