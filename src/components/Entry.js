import './Entry.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Entry = () => {

  return (
    <div className="Entry">
      <main>
        <div class="pyro">
            <div class="before"></div>
            <div class="after"></div>
        </div>
        
        <div className="container">
          <div className="box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497 470" height="100%" id="heart">
              <path d="M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z" stroke-width="20" fill="none"/>
              <defs>
                <radialGradient id="radialGradient" cx="50%" cy="50%" r="100%" gradientUnits="objectBoundingBox">
                  <stop offset="1%" style={{ stopColor: 'rgb(255, 150, 150)', stopOpacity: 1 }}></stop>
                  <stop offset="90%" style={{ stopColor: 'rgb(255, 0, 0)', stopOpacity: 1 }}></stop>
                  <stop offset="100%" style={{ stopColor: 'rgb(208, 46, 46)', stopOpacity: 1 }}></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div>
          <a href="/main" class="message">Happy Anniversary!</a>
        </div>
      </main>
    </div>
  );
}

export default Entry;