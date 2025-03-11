import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './TestStyle.css';

function Test() {
  const [value, setvalue] = useState(5);
  const [value2, setvalue2] = useState(10);

  useEffect(() => {
    setvalue(10);
    setvalue2(20);
  }, []); // Runs only once on mount

  useEffect(() => {
    const colorCard = document.getElementById('scroll-section');
    if (!colorCard) return;

    const handleScrollWithLatestState = (event) => {
        if (event.shiftKey) {
            event.preventDefault();
            console.log(value, value2); // Logs both `value` and `value2`
        }
    };

    colorCard.addEventListener('wheel', handleScrollWithLatestState, { passive: false });

    return () => {
        colorCard.removeEventListener('wheel', handleScrollWithLatestState);
    };
  }, [value, value2]);

  return (
    <div id="scroll-section">
      <div id="Blue">{value}</div>
      <div id="Black">{value2}</div> {/* You can display the second value as well */}
      <div id="Red">Red</div>
      <div id="Green">Green</div>
      <div id="Yello">Yello</div>
      <div id="Orange">Orange</div>
      <div id="Purple">Purple</div>
      <div id="Gray">Gray</div>
      <div id="White">White</div>
      <div id="Indigo">Indigo</div>
    </div>
  );
}

export { Test };
