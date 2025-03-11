import React, { useEffect } from 'react';
import './skillstyle.css';
import dataSkill from './Skills.json'

const Skills = () => {
  const sdivs = [];
for (let i = 0; i < dataSkill.length; i++) {
  sdivs.push(
    <div className={`scard ${i + 1}`} key={i}>
      <p id="name">{dataSkill[i].name}</p>
      <p id="detail">{dataSkill[i].detail}</p>
      <div id="tools">
        <div id='line'></div>
        <p>Tools <i class="fa-solid fa-screwdriver-wrench"></i></p>
        <div id='line'></div>
      </div>
      <div id="toolkit">
        {dataSkill[i].tools.map((tool, j) => (
          <div>
            <img src={`Logos/${dataSkill[i].logos[j]}`} alt={tool} />
            <p>{tool}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
  return (
    <div id="skills-section">
      <p id="title-s">My Skills</p>
      <p id="s-detail">Here are my skills and experiences aligned with tools.</p>
      <div id="s-cards">
        {sdivs}
      </div>
    </div>
  )
}

export { Skills };