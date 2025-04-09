import React, { useEffect, useState } from "react";
import "./Projectstyle.css";
const Product = require("./Product.json");

const Project = () => {
  const colorArray = [
    "#000080", // Navy Blue
    "#006400", // Dark Green
    "#8B0000", // Deep Red
    "#4169E1", // Royal Blue
    "#4B0082", // Dark Purplea
    "#008080", // Teal
    "#800000", // Maroon
    "#008B8B", // Dark Cyan
    "#8B4513", // Chocolate
  ];

  let screenWidth = window.screen.width;
  const padding = (screenWidth * 4) / 100;
  let fLocation;
  let overFive;
  if (screenWidth <= 700) {
    fLocation = [
      screenWidth / 2 - (screenWidth * 95) / 100 - padding * 2,
      screenWidth / 2 - (screenWidth * 65) / 100 - padding,
      screenWidth / 2 - (screenWidth * 25) / 100,
      screenWidth / 2 + (screenWidth * 25) / 100 + padding,
      screenWidth / 2 + (screenWidth * 65) / 100 + padding * 2,
    ];
    overFive = [
      screenWidth / 2 + (screenWidth * 77) / 100,
      (screenWidth * 30) / 100,
    ];
  } else {
    fLocation = [
      screenWidth / 2 - 685 - padding * 2,
      screenWidth / 2 - 455 - padding,
      screenWidth / 2 - 185,
      screenWidth / 2 + 185 + padding,
      screenWidth / 2 + 455 + padding * 2,
    ];
    overFive = [screenWidth / 2 + 635, 230];
  }

  const [locations, setlocations] = useState([fLocation]);
  const [positions, setPositions] = useState([1, 2, 3, 4, 5]);
  const [Project, setProject] = useState(Product);

  const clickHandler = (btnNum) => {
    const types = ["All", "Javascript", "Database", "FCC", "Others"];

    let totalData = 0;
    let positionArray = [];
    let locationArray = [];
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach((button) => button.classList.remove("active"));
    buttons[btnNum - 1].classList.add("active");
    if (btnNum == 1) {
      setProject(Product);
      if (Product.length == 1) {
        locationArray.push(fLocation[2]);
        positionArray.push(3);
      } else if (Product.length == 2) {
        positionArray.push(2, 3);
        locationArray.push(fLocation[1], fLocation[2]);
      } else if (Product.length <= 5) {
        for (let i = 0; i < Product.length; i++) {
          positionArray.push(i + 1);
          locationArray.push(fLocation[i]);
        }
      } else {
        for (let i = 0; i < 5; i++) {
          positionArray.push(i + 1);
          locationArray.push(fLocation[i]);
        }
        for (let i = 0; i < Product.length - 5; i++) {
          positionArray.push(i + 5);
          locationArray.push(overFive[0] + overFive[1] * (i + 1) + padding * i);
        }
      }
    } else {
      let Matched = [];
      for (let i = 0; i < Product.length; i++) {
        if (Product[i].type == types[btnNum - 1]) {
          Matched.push(Product[i]);
        }
      }
      setProject(Matched);
      if (Matched.length == 1) {
        locationArray.push(fLocation[2]);
        positionArray.push(3);
      } else if (Matched.length == 2) {
        positionArray.push(2, 3);
        locationArray.push(fLocation[1], fLocation[2]);
      } else if (Matched.length <= 5) {
        for (let i = 0; i < Matched.length; i++) {
          positionArray.push(i + 1);
          locationArray.push(fLocation[i]);
        }
      } else {
        for (let i = 0; i < 5; i++) {
          positionArray.push(i + 1);
          locationArray.push(fLocation[i]);
        }
        for (let i = 0; i < Matched.length - 5; i++) {
          positionArray.push(i + 5);
          locationArray.push(overFive[0] + overFive[1] * (i + 1) + padding * i);
        }
      }
    }
    setlocations(locationArray);
    setPositions(positionArray);
  };
  useEffect(() => {
    clickHandler(1);
  }, []);
  const cardClickHandler = (btnNum) => {
    const cards = document.querySelectorAll(".card");

    if (btnNum === 2) {
      cards.forEach((card) => (card.className = ""));
      let templocations = [locations.slice(), positions.slice()]; // Deep copy

      let firstValue = [templocations[0][0], templocations[1][0]]; // Store first values

      for (let i = 0; i < templocations[0].length - 1; i++) {
        templocations[0][i] = templocations[0][i + 1];
        templocations[1][i] = templocations[1][i + 1];

        cards[i].classList.add("card", "card-" + templocations[1][i]);

        if (templocations[1][i] == 3) {
          cards[i].style.zIndex = 22;
        } else {
          cards[i].style.zIndex = templocations[1][i];
        }

        if (i === templocations[0].length - 2) {
          cards[i + 1].classList.add("card", "card-" + firstValue[1]);
          cards[i + 1].style.zIndex = firstValue[1];
        }
      }

      templocations[0][templocations[0].length - 1] = firstValue[0];
      templocations[1][templocations[1].length - 1] = firstValue[1];

      setlocations([...templocations[0]]);
      setPositions([...templocations[1]]);
    } else if (btnNum === 4) {
      cards.forEach((card) => (card.className = ""));

      let templocations = [locations.slice(), positions.slice()]; // Deep copy

      let lastValue = [templocations[0].at(-1), templocations[1].at(-1)]; // Get last values

      for (let i = templocations[0].length - 1; i > 0; i--) {
        templocations[0][i] = templocations[0][i - 1];
        templocations[1][i] = templocations[1][i - 1];

        cards[i].classList.add("card", "card-" + templocations[1][i]);
        if (templocations[1][i] == 3) {
          cards[i].style.zIndex = 22;
        } else {
          cards[i].style.zIndex = templocations[1][i];
        }
      }

      templocations[0][0] = lastValue[0];
      templocations[1][0] = lastValue[1];
      cards[0].classList.add("card", "card-" + lastValue[1]);
      cards[0].style.zIndex = lastValue[1];

      setlocations([...templocations[0]]);
      setPositions([...templocations[1]]);
    }
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      card.style.left = locations[index] + "px";
    });

    // coloring language
    const lang = document.querySelectorAll("#p-res p");
    let j = 0;
    for (let i = 0; i < lang.length; i++) {
      lang[i].style.backgroundColor = colorArray[j];
      if (j % 8 === 0) {
        j = 0;
      }
      j++;
    }
  }, [locations]);

  // Createing project cards
  const divs = [];
  for (let i = 0; i < positions.length; i++) {
    divs.push(
      <div
        className={`card card-${positions[i]}`}
        onClick={() => cardClickHandler(positions[i])}
      >
        <iframe
          loading="lazy"
          src={Project[i].url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 id="p-title">{Project[i].name}</h1>
        <div id="p-stack">
          <div id="line-left"></div>
          <p>
            Tools <i class="fa-solid fa-screwdriver-wrench"></i>
          </p>
          <div id="line-right"></div>
        </div>

        <div id="p-res">
          {[...Array(Project[i].language.length)].map((_, j) => (
            <p>{Project[i].language[j]}</p>
          ))}
        </div>
        <div id="pc-detail">{Project[i].description}</div>
        {Project[i].github_link !== "empty" ? (
          <div
          id="b-detail"
          ><a
          id="github-link"  
          href={Project[i].github_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Link
        </a></div>
        ) : null}
      </div>
    );
  }

  //Handling the card scrolls on shift + scroll
  useEffect(() => {
    const colorCard = document.getElementById("project-card");
    if (!colorCard) return;

    const handleScrollWithLatestState = (event) => {
      if (!event.shiftKey) return;
      event.preventDefault();

      if (event.shiftKey && event.deltaY < 0) {
        cardClickHandler(2);
      } else if (event.shiftKey && event.deltaY > 0) {
        cardClickHandler(4);
      }
    };

    colorCard.addEventListener("wheel", handleScrollWithLatestState, {
      passive: false,
    });

    return () => {
      colorCard.removeEventListener("wheel", handleScrollWithLatestState);
    };
  }, [locations, positions]);

  //Handling the card scrolls on drag
  useEffect(() => {
    const colorCard = document.getElementById("project-card");
    if (!colorCard) return;

    let isDragging = false;
    let startX, scrollLeft;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = getEventCoords(e).x - colorCard.offsetLeft;
      scrollLeft = colorCard.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDragging = false;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = getEventCoords(e).x - colorCard.offsetLeft;
      const walk = (x - startX) * 2;
      cardClickHandler(walk > 0 ? 2 : 4);
    };

    colorCard.addEventListener("mousedown", handleMouseDown);
    colorCard.addEventListener("mouseleave", handleMouseLeave);
    colorCard.addEventListener("mouseup", handleMouseUp);
    colorCard.addEventListener("mousemove", handleMouseMove);
    colorCard.addEventListener("touchstart", handleMouseDown);
    colorCard.addEventListener("touchend", handleMouseUp);
    colorCard.addEventListener("touchmove", handleMouseMove, { passive: false });

    return () => {
      colorCard.removeEventListener("mousedown", handleMouseDown);
      colorCard.removeEventListener("mouseleave", handleMouseLeave);
      colorCard.removeEventListener("mouseup", handleMouseUp);
      colorCard.removeEventListener("mousemove", handleMouseMove);
      colorCard.removeEventListener("touchstart", handleMouseDown);
      colorCard.removeEventListener("touchend", handleMouseUp);
      colorCard.removeEventListener("touchmove", handleMouseMove);
    };
  }, [ locations, positions ]);

// Get coordinates for mouse or touch
function getEventCoords(e) {
  if (e.touches) {
    return {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}


  return (
    <div id="project-section">
      <p id="title-p">Project</p>
      <p id="p-detail">
        I have completed these project along the coding journey.
      </p>
      <div id="options">
        <button className="button active" onClick={() => clickHandler(1)}>
          All
        </button>
        <button className="button" onClick={() => clickHandler(2)}>
          JavaScript
        </button>
        <button className="button" onClick={() => clickHandler(3)}>
          Database
        </button>
        <button className="button" onClick={() => clickHandler(4)}>
          FreeCodeCamp
        </button>
        <button className="button" onClick={() => clickHandler(5)}>
          Others
        </button>
      </div>
      <div id="project-card">
        {divs}
      </div>
    </div>
  );
};
export { Project };
