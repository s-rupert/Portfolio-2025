import React, { useEffect } from 'react';
import './Achievementstyle.css';
import AchTimeline from './AchTimeline.json'
import * as d3 from 'd3';

const Achievement = () => {
  return (
    <div id="achievement-section">
      <h1 id="title-a">Achievement</h1>
      <p id="a-detail">Click on each Scroll to see Achievements</p>
      <div id="chart"></div>
      <div id="t-years">Date in Years</div>
      <Chart id="chart"/>
      <div id="t-age">Age in Numbers</div>
    </div>
  )
}

const Chart = () => {
  useEffect(() => {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    d3.select("#chart").selectAll("*").remove();
    const parseYear = d3.timeParse("%Y");
    let height, width, padding, space;

    if (screenWidth >= 800) {
      height = screenWidth * 40 / 100
      width = screenWidth * 55 / 100
      padding = 60;
      space = 5
    } else {
      height = screenWidth * 80 / 100
      width = screenWidth * 95 / 100
      padding = 60;
      space = 5;
    }

    const svg = d3.select("#chart")
      .append("svg")
      .attr("height", height+50)
      .attr("width", width);


    const xScale = d3.scaleLinear()
      .domain([16, 24])
      .range([padding + screenWidth * space / 100, width - padding + screenWidth * space / 100]);


    const yScale = d3.scaleTime()
      .domain([parseYear(2017), parseYear(2028)])
      .range([height - padding, 50]);
      
    const xAxis = d3.axisBottom(xScale);
    svg.append("g")
      .attr("transform", `translate(0,${height - padding})`)
      .attr("id", "x-axis")
      .call(xAxis);

    const yAxis = d3.axisLeft(yScale);
    svg.append("g")
      .attr("transform", `translate(${padding + screenWidth * space / 100}, 0)`)
      .attr("id", "y-axis")
      .call(yAxis);

    const checkPoint = svg.selectAll("circle")
      .data(AchTimeline)
      .enter()
      .append("circle")
      .attr("class", (d, i) => "point-" + i)
      .attr("cx", (d, i) => xScale(d.age))
      .attr("cy", (d, i) => yScale(parseYear(d.year)) - 30)
      .attr("r", screenWidth * 1 / 100)
      .attr("stroke", "rgb(220, 95, 0)")
      .attr("stroke-width", 3)
      .attr("fill", "black")
      .style("display", d => {
        return d.name == 'Upcoming' || d.name == "Not Available" ? "none" : "block"
      });

    // Define the line generator
    const line = d3.line()
      .x(d => xScale(d.age))
      .y(d => yScale(parseYear(d.year)) - 30);

    // Create a marker for the arrowhead
    svg.append("defs")
      .append("marker")
      .attr("id", "arrowhead")          // ID for the marker
      .attr("viewBox", "0 0 10 10")     // Viewbox for the arrow shape
      .attr("refX", 1)                 // Position of the arrowhead along the line
      .attr("refY", 5)                  // Position of the arrowhead vertically
      .attr("markerWidth", 2)          // Width of the arrowhead
      .attr("markerHeight", 2)         // Height of the arrowhead
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 Z")

    // Add the path (line) to connect the dots with the arrowhead
    svg.append("path")
      .data([AchTimeline])
      .attr("d", line)
      .attr("id", "line")
      .attr("marker-end", "url(#arrowhead)");

    let Scrollactive = true;

    svg.selectAll("image")
      .data(AchTimeline)
      .enter()
      .append("image")
      .attr("href", "./Redflag.gif")
      .attr("id", "flag")
      .attr("x", d => { return screenWidth >= 800 ? xScale(d.age) - screenWidth * 4 / 100 : xScale(d.age) - screenWidth * 9/ 100 })
      .attr("y", d => { return screenWidth >= 800 ? yScale(parseYear(d.year)) - screenWidth * 5.9 / 100 : yScale(parseYear(d.year)) - screenWidth * 12 / 100 })
      .attr("width", (d) => { return screenWidth >= 800 ?screenWidth * 5 / 100:screenWidth * 10 / 100  })
      .attr("height",(d) => { return screenWidth >= 800 ?screenWidth * 5 / 100:screenWidth * 10 / 100  } )
      .each(function (d) {
        if (d.name == 'Upcoming' || d.name == 'Not Available') {
          d3.select(this).remove();
        }
      })
      .attr("transform", function (d) {
        const xPos = xScale(d.age);
        const yPos = yScale(parseYear(d.year)) - 30;
        return `rotate(35, ${xPos + 25}, ${yPos + 25})`;
      });

    svg.selectAll("image.scroll")
      .data(AchTimeline)
      .enter()
      .append("image")
      .attr("id", "Cscroll")
      .attr("href", "./Scrolls/Scrollclose.png")
      .attr("alt", "Scroll Image")
      .attr("x", d => { return screenWidth >= 800 ? xScale(d.age) - screenWidth * 4 / 100 : xScale(d.age) - screenWidth * 8/ 100 })
      .attr("y", d => { return screenWidth >= 800 ? yScale(parseYear(d.year)) - screenWidth * 3 / 100 : yScale(parseYear(d.year)) - 50 })
      .attr("width", (d) => { return screenWidth >= 800 ?screenWidth * 7 / 100:screenWidth * 14 / 100  })
      .attr("height",(d) => { return screenWidth >= 800 ?screenWidth * 7 / 100:screenWidth * 14 / 100  } )
      .each(function (d) {
        // Remove scroll if it's 'Upcoming' or 'Not Available'
        if (d.name == 'Upcoming' || d.name == 'Not Available') {
          d3.select(this).remove();
        }
      })
      .on("click", function (event, d) {
        const imgElement = d3.select(this);
        imgElement.raise(); 
        if (Scrollactive) {
          imgElement.attr("href", function (d) {
            return d.img;
          })
          .transition()
          .duration(700)
          .ease(d3.easeCubicInOut)
            .attr("width", (d) => { return screenWidth >= 800 ?screenWidth * 30 / 100:screenWidth * 70 / 100  })
            .attr("height",(d) => { return screenWidth >= 800 ?screenWidth * 30 / 100:screenWidth * 70 / 100  } )
            .attr("x", screenWidth >= 800 ?screenWidth*20/100: screenWidth*10/100)
            .attr("y", screenWidth >= 800 ?screenHeight*25/100: screenWidth*25/100)
            
          Scrollactive = false;
        } else {
          imgElement.attr("href", "./Scrolls/Scrollclose.png")
            .attr("id", "Cscroll")
            .attr("width", (d) => { return screenWidth >= 800 ?screenWidth * 7 / 100:screenWidth * 14 / 100  })
            .attr("height",(d) => { return screenWidth >= 800 ?screenWidth * 7 / 100:screenWidth * 14 / 100  } )
            .attr("x", d => { return screenWidth >= 800 ? xScale(d.age) - screenWidth * 4 / 100 : xScale(d.age) - screenWidth * 8/ 100 })
            .attr("y", d => { return screenWidth >= 800 ? yScale(parseYear(d.year)) - screenWidth * 3 / 100 : yScale(parseYear(d.year)) - 50 })
            
          Scrollactive = true;
        }
      });
  }, []);



};

export { Achievement };