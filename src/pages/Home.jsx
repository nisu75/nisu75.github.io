import React, { useState, useEffect } from "react";
import "./Home.css";

export default function HomeDisplay() {
    const cat0 = String.raw`  ╱|、
(˚ˎ 。7
  |、˜〵
 じしˍ,)ノ`;

    const cat1 = String.raw`ㅤ ∧＿∧
　(　･∀･)
　(　つ┳⊃
ε (_)へ⌒ヽﾌ
 (　　(　･ω･)
  ◎―◎   ⊃  ⊃`;

    const cat2 = String.raw`      ∧＿∧
　 (｡･ω･｡)つ━☆・*。
  ⊂/　     /　   ・゜
　しーＪ　　　     °。+ * 。　
　　　　　                      .・゜
　　　　　                      ゜｡ﾟﾟ･｡･ﾟﾟ。
　　　　                         　ﾟ。　 　｡ﾟ
                                            　ﾟ･｡･ﾟ `;

    const cat3 = String.raw`∩――――∩
 ||     ∧ ﾍ　 ||
 ||    (* ´ ｰ${"`"})
 |ﾉ^⌒    づ${"`"}￣  ＼
 (　ノ　　⌒ ヽ ＼
 ＼　　||￣￣￣￣￣||
 　 ＼,ﾉ||                  ||`;

    const cat4 = String.raw`☆ *　. 　☆
  　　. ∧＿∧　∩　* ☆
  * ☆ ( ・∀・)/ .
  　. ⊂　　 ノ* ☆
  ☆ * (つ ノ .☆
  　　 (ノ`;
    const catArray = [cat0, cat1, cat2, cat3, cat4];
    
    const [cat, setCat] = React.useState(cat0);    

    useEffect(()=>{
        const min = 0;
        const max = 4;

        let rand = min + Math.round(Math.random() * (max - min));
        setCat(catArray[rand]);
    }, [])

    return (<div className="home">
        <div className="text">
            <p className="p1">
                Hi! I’m Nicole, an aspiring software developer, design enthusiast, and cat lover trying to find my way through life, love and everything else&nbsp;
            </p>
            <p className="p2">
                ❤
            </p>
            <p className="notice">
                ** Site is a work in progress ٩( ᐛ )( ᐖ )۶
	
            </p>
        </div>
        <div className="cats">
            <pre className="cat"> {cat} </pre>
        </div>
    </div>)
}