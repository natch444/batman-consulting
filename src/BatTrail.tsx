import React, { useEffect, useState } from "react";
import "./BatTrail.css";

// Type definition for a Bat object
interface Bat {
  id: number;
  x: number;
  y: number;
}

const BatTrail: React.FC = () => {
  const [bats, setBats] = useState<Bat[]>([]);  // Array of bats with position
  const [lastSpawnTime, setLastSpawnTime] = useState<number>(0); // Timestamp for the last spawn

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Get current time in milliseconds
      const currentTime = Date.now();

      // Spawn one bat every second
      if (currentTime - lastSpawnTime >= 100) {
        // Update the last spawn time
        setLastSpawnTime(currentTime);

        // Create a new bat with position
        setBats((prevBats) => [
          ...prevBats,
          { x: mouseX, y: mouseY, id: Date.now() }
        ]);
      }
    };

    // Attach mousemove event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastSpawnTime]);  // Depend on lastSpawnTime to update spawn logic

  // Remove bats after they fall (3s for the animation duration)
  useEffect(() => {
    const timer = setInterval(() => {
      setBats((prevBats) => prevBats.filter((bat) => Date.now() - bat.id < 3000));
    }, 100);

    return () => clearInterval(timer); // Clean up interval on unmount
  }, []);

  return (
    <div>
      {bats.map((bat) => (
        <div
          key={bat.id}
          className="bat"
          style={{ left: `${bat.x}px`, top: `${bat.y}px` }}
        ></div>
      ))}
    </div>
  );
};

export default BatTrail;
