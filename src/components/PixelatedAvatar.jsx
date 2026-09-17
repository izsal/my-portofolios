// components/PixelatedAvatar.jsx
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

const GRID_SIZE = 12; // 12x12 = 144 pixels (Renlenon pattern)

export const PixelatedAvatar = ({
  src = "/images/profiles.jpeg",
  alt = "Izsal Qurlinas Afandi profile avatar",
  size = 76,
}) => {
  const [isColor, setIsColor] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const timeoutMidRef = useRef(null);
  const timeoutEndRef = useRef(null);

  // Generate randomized delays for the 144 pixel blocks to create the pixel-dissolve wave
  const pixelDelays = useMemo(() => {
    const total = GRID_SIZE * GRID_SIZE;
    const delays = [];
    for (let i = 0; i < total; i++) {
      // Calculate normalized distance from center + pseudo-random jitter
      const row = Math.floor(i / GRID_SIZE);
      const col = i % GRID_SIZE;
      const centerDist = Math.hypot(col - GRID_SIZE / 2, row - GRID_SIZE / 2);
      const delay = centerDist * 0.025 + Math.random() * 0.2;
      delays.push(delay.toFixed(3));
    }
    return delays;
  }, []);

  // Trigger pixel morph transition
  const triggerMorph = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsTransitioning(true);

    // Midpoint of animation: swap image state
    timeoutMidRef.current = setTimeout(() => {
      setIsColor((prev) => !prev);
    }, 280);

    // End transition
    timeoutEndRef.current = setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
    }, 620);
  };

  // Subtle 5s auto-switch cycle (runs steadily without resetting mid-animation)
  useEffect(() => {
    const interval = setInterval(() => {
      triggerMorph();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Cleanup timeout handles only when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutMidRef.current) clearTimeout(timeoutMidRef.current);
      if (timeoutEndRef.current) clearTimeout(timeoutEndRef.current);
    };
  }, []);

  return (
    <div
      className={`pixelated-image-card ${isTransitioning ? "transitioning" : ""}`}
      onClick={triggerMorph}
      onMouseEnter={() => {
        if (!isTransitioning) triggerMorph();
      }}
      title="Klik atau arahkan mouse untuk animasi pixel antara Hitam Putih dan Full Warna"
      style={{
        width: size,
        height: size,
      }}
    >
      {/* 1. Default Layer: Monochrome Black & White */}
      <div
        className={`pixelated-card-layer monochrome ${!isColor ? "active" : "inactive"}`}
        aria-hidden={isColor}
      >
        <Image
          src={src}
          alt={alt}
          width={size * 2}
          height={size * 2}
          priority
          className="avatar-face-img grayscale-mode"
        />
      </div>

      {/* 2. Active Layer: Full Natural Color */}
      <div
        className={`pixelated-card-layer full-color ${isColor ? "active" : "inactive"}`}
        aria-hidden={!isColor}
      >
        <Image
          src={src}
          alt={alt}
          width={size * 2}
          height={size * 2}
          priority
          className="avatar-face-img color-mode"
        />
      </div>

      {/* 3. 12x12 Pixel Grid Dissolve Curtain */}
      <div className={`pixelated-grid-overlay ${isTransitioning ? "animating" : ""}`}>
        {pixelDelays.map((delay, idx) => (
          <div
            key={idx}
            className="pixel-block"
            style={{
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      {/* Active availability dot */}
      <span
        className="status-dot"
        title={isColor ? "Full Color Mode" : "Monochrome Mode"}
      />
    </div>
  );
};

export default PixelatedAvatar;
