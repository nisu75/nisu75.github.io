import "./About.css";
import "./Stylesheet.css";

export default function AboutDisplay() {
    return (<div className="page">
        <div className="text">
            <div className="abtdescription">
            Nice to meet you! I'm Nicole, a Computer Science student at the University of Waterloo. 
            <br /><br />
            I'm interested in cybersecurity and front-end development, as well as digital product design. I've dabbled in photo and video editing, and done more than just dabbling in graphic design, music, and visual art. 
            <br /><br />
            I enjoy solving problems and facing new challenges, perfect for navigating the constantly evolving tech landscape. I appreciate the constant exploration and learning that new projects bring, and I'd love to pursue technology that drives significant and impactful real-world advancements.
            <br /><br />
            Feel free to reach out - I'd love to chat and connect more!
            </div>

            {/*
            <p className="arrow">
                ↳
            </p>
            <p className="note">
                <a className="link" href="https://media.giphy.com/media/nURzWHsOTpDDa/giphy.gif" target="_blank" rel="noopener noreferrer">
                    sample link
                </a>
            </p>
            */}

            <p className="abtdivider">
                ~~
            </p>

            {/*
            <h className="header">
                More about me!
            </h>
            
            <p className="extra">
                <p className="desc">
                    What I'm ...
                </p>

                <p className="arrow">
                    ↳
                </p>
                <p className="note">
                    <a className="link" href="https://media.giphy.com/media/nURzWHsOTpDDa/giphy.gif" target="_blank" rel="noopener noreferrer">
                        sample link
                    </a>
                </p>
            </p>
            */}
        </div>
    </div>)
}