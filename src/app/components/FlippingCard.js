"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const FlippingCard = ({ frontContent, backContent, language, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full h-80 perspective-1000 cursor-pointer" // Increased height
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        <div className="flip-card-front absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden overflow-hidden">
          <div className="h-40 overflow-hidden">
            {" "}
            {/* Image container */}
            <img
              src={image}
              alt={frontContent.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{frontContent.title}</h3>
            <p className="text-gray-600">{frontContent.description}</p>
          </div>
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
