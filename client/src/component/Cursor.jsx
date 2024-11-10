import React, { useEffect, useRef } from "react";
// import "./CustomCursor.css";
import '../css/Cursor.css';

const CustomCursor = () => {
  const mainCursor = useRef(null);
  const trailingCircles = useRef([]);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isCursorVisible) {
        mainCursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

        trailingCircles.current.forEach((circle, index) => {
          setTimeout(() => {
            circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${1 - index * 0.1})`;
          }, index * 20);
        });
      }
    };

    const handleMouseLeave = () => {
      setIsCursorVisible(false); 
    };

    const handleMouseEnter = () => {
      setIsCursorVisible(true); 
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isCursorVisible]);

  return (
    <>
      <div
        ref={mainCursor}
        className={`main-cursor ${!isCursorVisible ? "hidden" : ""}`}
      ></div>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailingCircles.current[i] = el)}
          className={`trailing-circle ${!isCursorVisible ? "hidden" : ""}`}
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;
