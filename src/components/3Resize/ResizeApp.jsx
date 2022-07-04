/**
 * USE THIS FUNCTION getEventListeners(window)
 */

import React, { useState, useEffect } from "react";

function ResizeApp() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("return useEf");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div>
      <h3>{windowWidth}</h3>
      {isMobile && <h3>Show only mobile device</h3>}
    </div>
  );
}

export default ResizeApp;
