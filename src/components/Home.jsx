import "./Home.css";

export default function HomeDisplay() {
    var cat1 = String.raw`  ╱|、
(˚ˎ 。7
  |、˜〵
 じしˍ,)ノ`;
 
    return (<div className="home">
        <div className="text">
            <p className="p1">
                Hi! I’m Nicole, an aspiring software developer and cat lover trying to find my way through life, love and everything else&nbsp;
            </p>
            <p className="p2">
                ❤
            </p>
        </div>
        <div className="cats">
            <pre className="cat"> {cat1} </pre>
        </div>
    </div>)
}