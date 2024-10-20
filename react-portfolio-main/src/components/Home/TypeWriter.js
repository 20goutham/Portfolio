import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        
        strings: [
          "Web Development",
          "Full Stack Development",
          "Artificial Intelligence",
          "Machine Learning",
        ],
        
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
