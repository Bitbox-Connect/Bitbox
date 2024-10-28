import React, { useEffect, useRef } from "react";
// import "./CustomCursor.css";
import '../css/Cursor.css';

const CustomCursor = () => {
  const mainCursor = useRef(null);
  const trailingCircles = useRef([]);

  useEffect(() => {
    const onMouseMove = (e) => {
      mainCursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

      trailingCircles.current.forEach((circle, index) => {
        setTimeout(() => {
          circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${1 - index * 0.1})`;
        }, index * 20);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div ref={mainCursor} className="main-cursor"></div>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailingCircles.current[i] = el)}
          className="trailing-circle"
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;
