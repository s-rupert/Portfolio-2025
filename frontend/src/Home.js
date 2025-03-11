import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
import './HomeStyle.css';

const Homepage = ()=>{
    const i_3_2_Array = [
        "Web...   ",
        "Front End...   ",
        "Back End...   ",
        "Full Stack...   ",
        "UI/UX...   ",
        "Software...   "
    ]
    const [ i_3_2, set_i_3_2] = useState(i_3_2_Array[0])
    
        useEffect(() => {
            function randomNumberGenerator(){
                const number = Math.floor(Math.random() * i_3_2_Array.length);
                let C_String = i_3_2_Array[number].split("");
                let a=0;
                let new_String;
            const intervalId = setInterval(() => {
                new_String=new_String?new_String+C_String[a]:C_String[a];
                a++;
                if(a>=i_3_2_Array[number].length){
                    set_i_3_2(new_String);
                    clearInterval(intervalId);
                    randomNumberGenerator();
                }
                set_i_3_2(new_String);    
            }, 300);
        }
        randomNumberGenerator();
    
        }, [])

        

    return(
        <div id="home-section">
             <div id="logo">
                <div id="l-top">RUPESH</div>
                <div id="l-bottom">&lt;INFO/&gt;</div>
             </div>
             <div id="main">
             <div id="main_info">
                <div id="i_1">Hi, Welcome</div>
                <div id="i_2">I,m Rupesh Singh</div>
                <div id="i_3">
                    <div id="i_3_1">a</div>
                    <div id="i_3_2">{i_3_2}</div>
                </div>
                <div id="i_4">Developer</div>
                <div id="i_5">
                    <button id="contact"><a href="/Rupesh_singh_CV.pdf" download>Download CV</a>
                    </button>
                </div>
             </div>
             <div id="main-model">
                <img id="model" src="/model1.gif" alt="model" />
             </div>
             </div>
             <div id="infinite-roll">
                <div id="logos_slide">
                    <img alt="Java" src="./Logos/java.png" />
                    <img alt="Blender" src="./Logos/Blender.png" />
                    <img alt="CSS" src="./Logos/CSS-Logo.png" />
                    <img alt="D3" src="./Logos/D3.png" />
                    <img alt="HTML5" src="./Logos/HTML5.png" />
                    <img alt="Javascript" src="./Logos/Javascript.png" />
                    <img alt="Mongodb" src="./Logos/mongodb.png" />
                    <img alt="MS-Office" src="./Logos/MS_office.png" />
                    <img alt="MySQL" src="./Logos/MySQL.png" />
                    <img alt="Nodejs" src="./Logos/Nodejs.png" />
                    <img alt="PSQL" src="./Logos/PSQL.png" />
                    <img alt="Python" src="./Logos/Python.png" />
                    <img alt="React" src="./Logos/React.png" />
                    <img alt="Three" src="./Logos/Three.png" />
                    <img alt="Canva" src="./Logos/Canva.png" />
                    <img alt="Bootstrap" src="./Logos/Bootstrap.png" />
                    <img alt="Figma" src="./Logos/Figma.svg" />
                    
                </div>
                <div id="logos_slide">
                    <img alt="Java" src="./Logos/java.png" />
                    <img alt="Blender" src="./Logos/Blender.png" />
                    <img alt="CSS" src="./Logos/CSS-Logo.png" />
                    <img alt="D3" src="./Logos/D3.png" />
                    <img alt="HTML5" src="./Logos/HTML5.png" />
                    <img alt="Javascript" src="./Logos/Javascript.png" />
                    <img alt="Mongodb" src="./Logos/mongodb.png" />
                    <img alt="MS-Office" src="./Logos/MS_office.png" />
                    <img alt="MySQL" src="./Logos/MySQL.png" />
                    <img alt="Nodejs" src="./Logos/Nodejs.png" />
                    <img alt="PSQL" src="./Logos/PSQL.png" />
                    <img alt="Python" src="./Logos/Python.png" />
                    <img alt="React" src="./Logos/React.png" />
                    <img alt="Three" src="./Logos/Three.png" />
                    <img alt="Canva" src="./Logos/Canva.png" />
                    <img alt="Bootstrap" src="./Logos/Bootstrap.png" />
                    <img alt="Figma" src="./Logos/Figma.svg" />
                    
                </div>
             </div>
        </div>
    );
}
export { Homepage };