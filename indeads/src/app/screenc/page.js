"use client"
import React, { useState, useEffect } from "react";
import styles from "../page.module.css"


export default function Screen () {
  const windows = window || global
  const [screenWidth, setScreenWidth] = useState(windows.innerWidth);

  useEffect(() => {
    
    windows.addEventListener("resize", () => {
      setScreenWidth(windows.innerWidth);
    });
  }, []);

  return (
    <div>
      <p>The current screen width is {screenWidth}px.</p>
      <div
        className={
          screenWidth > 600 ? "container-fluid" : "container"
        }
      >
        This is a container.
      </div>
    </div>
  );
}


