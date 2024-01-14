import "./About.css";
import "./Stylesheet.css";

export default function AboutDisplay() {
    return (<div className="page">
        <div className="text">
            <div className="abtdescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna lectus, pulvinar quis elit nec, pulvinar varius lacus. Morbi tempus vehicula lectus, ac pellentesque nunc pellentesque et. Fusce mollis, elit nec lobortis varius, nunc tortor ornare nisl, ut vestibulum mauris leo molestie dui. Morbi tincidunt erat non ante condimentum suscipit. Pellentesque posuere laoreet feugiat. Curabitur iaculis ex eget maximus lobortis. Nam convallis neque ut velit cursus, id suscipit elit ullamcorper. Maecenas aliquam, arcu sit amet pretium consequat, massa arcu finibus.
            </div>
            <p className="arrow">
                ↳
            </p>
            <p className="note">
                <a className="link" href="https://media.giphy.com/media/nURzWHsOTpDDa/giphy.gif" target="_blank" rel="noopener noreferrer">
                    sample link
                </a>
            </p>

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