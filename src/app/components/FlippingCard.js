"use client";

import React, { useState } from "react";

const FlippingCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full h-64 perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        <div className="flip-card-front absolute w-full h-full bg-white shadow-md rounded-lg backface-hidden">
          {frontContent}
        </div>
        <div className="flip-card-back absolute w-full h-full bg-gray-100 shadow-md rounded-lg backface-hidden rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
