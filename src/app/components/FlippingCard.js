"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const FlippingCard = ({ frontContent, backContent, language }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full h-64 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        <div className="flip-card-front absolute w-full h-full bg-white shadow-md rounded-lg backface-hidden">
          {frontContent}
        </div>
        <div className="flip-card-back absolute w-full h-full bg-gray-800 shadow-md rounded-lg backface-hidden rotate-y-180 overflow-auto">
          <SyntaxHighlighter
            language={language}
            style={nightOwl}
            customStyle={{
              margin: 0,
              padding: "1rem",
              height: "100%",
              borderRadius: "0.5rem",
            }}
          >
            {backContent}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
