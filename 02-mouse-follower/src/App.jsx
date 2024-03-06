import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("useEffect", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log({ clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      console.log("cleanup");
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);
  return (
    <>
      <main>
        <div
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            left: -10,
            top: -10,
            backgroundColor: "#000",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: "none",
            zIndex: 1000,
            display: enabled ? "block" : "none",
          }}
        ></div>
        <button
          onClick={() => {
            setEnabled(!enabled);
          }}
        >
          {enabled ? "Disable" : "Enable"} Mouse Follower
        </button>
      </main>
    </>
  );
}

export default App;
