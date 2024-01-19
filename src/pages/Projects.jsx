import "./Stylesheet.css";

export default function ProjectsDisplay() {
    return (<div className="page">
        <div className="text">
            <h className="header">
                Projects
                <p className="divider">
                    ~~
                </p>
            </h>
            
            <p className="infoblock">
                <p className="title">
                    weather-app,&nbsp;
                    <p className="year">
                        2024
                    </p>
                </p>
                <p className="description">
                    a simple weather app created with React - working on adding information relating to cloud coverage and finding ideal spots for stargazing considering elapsed time for travel
                </p>
                <p className="arrow">
                    ↳
                </p>
                <p className="note">
                    <a className="link" href="https://github.com/toaster203/weather-app" target="_blank" rel="noopener noreferrer">
                        github
                    </a>
                </p>
            </p>
            
            <p className="infoblock">
                <p className="title">
                    feed the frog,&nbsp;
                    <p className="year">
                        2021
                    </p>
                </p>
                <p className="description">
                    a frog-themed web app centered around the Eat the Frog productivity method, adding the right vibes of music to your Pomodoro study sessions
                </p>
                <p className="arrow">
                    ↳
                </p>
                <p className="note">
                    <a className="link" href="https://devpost.com/software/feed-the-frog" target="_blank" rel="noopener noreferrer">
                        devpost
                    </a>
                </p>
            </p>

            <p className="infoblock">
                <p className="title">
                    simon says,&nbsp;
                    <p className="year">
                        2019
                    </p>
                </p>
                <p className="description">
                    a retro pixel art Simon Says game with a GUI made using Java Swing, created as the final project for our grade 11 computer science course
                </p>
                <p className="arrow">
                    ↳
                </p>
                <p className="note">
                    <a className="link" href="https://github.com/toaster203/Simon-Says" target="_blank" rel="noopener noreferrer">
                        github
                    </a>
                </p>
            </p>            
        </div>
    </div>)
}