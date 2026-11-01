import React from "react";

interface CherryBlossomProps {
  className?: string;
  size?: number;
}

export const CherryBlossom: React.FC<CherryBlossomProps> = ({ className = "", size = 26 }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src="https://media.tenor.com/ZKBDtqe2rkwAAAAj/flowers-cherryblossom-pink-gif-png-cute.gif"
        alt="Cherry blossom blooming sticker"
        style={{ width: `${size}px`, height: `${size}px` }}
        className="object-contain filter drop-shadow"
      />
    </div>
  );
};

export default CherryBlossom;
