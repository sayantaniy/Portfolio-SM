import React from "react";
import CherryBlossom from "./CherryBlossom";

export const BackgroundText: React.FC = () => {
  // Generate 12 gentle floating sakura petals with deterministic randomized inline styles
  const petals = [
    { id: 1, left: "8%", delay: "0s", duration: "14s", size: "12px", opacity: 0.6 },
    { id: 2, left: "22%", delay: "3s", duration: "16s", size: "15px", opacity: 0.5 },
    { id: 3, left: "38%", delay: "1.5s", duration: "13s", size: "11px", opacity: 0.65 },
    { id: 4, left: "52%", delay: "5s", duration: "18s", size: "14px", opacity: 0.5 },
    { id: 5, left: "68%", delay: "2.2s", duration: "15s", size: "13px", opacity: 0.6 },
    { id: 6, left: "84%", delay: "4s", duration: "17s", size: "16px", opacity: 0.45 },
    { id: 7, left: "15%", delay: "7s", duration: "15s", size: "10px", opacity: 0.55 },
    { id: 8, left: "75%", delay: "6s", duration: "14s", size: "12px", opacity: 0.5 },
  ];

  return (
    <>
      {/* Drifting Sakura Petals */}
      <div className="sakura-drift-container" aria-hidden="true">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="sakura-petal"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: petal.size,
              height: `calc(${petal.size} * 1.35)`,
              opacity: petal.opacity,
            }}
          />
        ))}
      </div>

      {/* Atmospheric Background Watermark */}
      <div className="background-watermark-wrapper" aria-hidden="true">
        <div className="flex items-center gap-3">
          <div className="background-text">あおい はる</div>
          <div className="opacity-40 hover:opacity-100 transition-opacity">
            <CherryBlossom size={42} />
          </div>
        </div>
        <div className="background-subtext">AOI HARU • BLUE SPRING</div>
      </div>
    </>
  );
};

export default BackgroundText;
