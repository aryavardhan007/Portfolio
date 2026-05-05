import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function AvatarFace() {
  const svgRef = useRef(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const max = 8;
      setEyeOffset({
        x: Math.max(-max, Math.min(max, (e.clientX - centerX) * 0.08)),
        y: Math.max(-max, Math.min(max, (e.clientY - centerY) * 0.08)),
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="avatar-face-wrap"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 231 289"
        className="avatar-face-svg"
      >
        <defs>
          <clipPath id="avatarShapeClip">
            <path d="M230.809 115.385V249.411C230.809 269.923 214.985 287.282 194.495 288.411C184.544 288.949 175.364 285.718 168.26 280C159.746 273.154 147.769 273.461 139.178 280.23C132.638 285.384 124.381 288.462 115.379 288.462C106.377 288.462 98.1451 285.384 91.6055 280.23C82.912 273.385 70.9353 273.385 62.2415 280.23C55.7532 285.334 47.598 288.411 38.7246 288.462C17.4132 288.615 0 270.667 0 249.359V115.385C0 51.6667 51.6756 0 115.404 0C179.134 0 230.809 51.6667 230.809 115.385Z" />
          </clipPath>

          {/* Animated mesh gradient via SVG gradient + filter */}
          <radialGradient id="grad1" cx="30%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#FFB3D9" />
            <stop offset="50%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#4A90E2" />
          </radialGradient>
          <radialGradient id="grad2" cx="70%" cy="70%" r="60%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="60%" stopColor="#2C3E50" />
            <stop offset="100%" stopColor="#1A1A2E" />
          </radialGradient>

          <filter id="blur-blend">
            <feGaussianBlur stdDeviation="18" result="blur" />
          </filter>
        </defs>

        {/* Gradient blob body */}
        <g clipPath="url(#avatarShapeClip)">
          {/* Base dark layer */}
          <rect width="231" height="289" fill="#1A1A2E" />
          {/* Animated color blobs */}
          <motion.ellipse
            cx="80" cy="100" rx="120" ry="100"
            fill="#a855f7"
            filter="url(#blur-blend)"
            animate={{ cx: [80, 140, 80], cy: [80, 160, 80] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            opacity="0.75"
          />
          <motion.ellipse
            cx="160" cy="200" rx="110" ry="110"
            fill="#4A90E2"
            filter="url(#blur-blend)"
            animate={{ cx: [160, 70, 160], cy: [200, 100, 200] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            opacity="0.65"
          />
          <motion.ellipse
            cx="115" cy="280" rx="90" ry="80"
            fill="#ec4899"
            filter="url(#blur-blend)"
            animate={{ cx: [115, 50, 180, 115], cy: [280, 200, 260, 280] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            opacity="0.5"
          />
        </g>

        {/* Eyes — white base */}
        <motion.ellipse
          rx="22" ry="32" fill="white"
          animate={{ cx: 80 + eyeOffset.x, cy: 120 + eyeOffset.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
        <motion.ellipse
          rx="22" ry="32" fill="white"
          animate={{ cx: 151 + eyeOffset.x, cy: 120 + eyeOffset.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />

        {/* Pupils */}
        <motion.ellipse
          rx="11" ry="16" fill="#1A1A2E"
          className="avatar-eye"
          animate={{ cx: 80 + eyeOffset.x * 1.2, cy: 122 + eyeOffset.y * 1.2 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
        <motion.ellipse
          rx="11" ry="16" fill="#1A1A2E"
          className="avatar-eye"
          animate={{ cx: 151 + eyeOffset.x * 1.2, cy: 122 + eyeOffset.y * 1.2 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />

        {/* Eye shine */}
        <motion.ellipse
          rx="4" ry="5" fill="white" opacity="0.8"
          animate={{ cx: 84 + eyeOffset.x, cy: 113 + eyeOffset.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
        <motion.ellipse
          rx="4" ry="5" fill="white" opacity="0.8"
          animate={{ cx: 155 + eyeOffset.x, cy: 113 + eyeOffset.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
      </svg>
    </motion.div>
  );
}

export default AvatarFace;
