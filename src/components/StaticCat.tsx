import { useState } from 'react';
import '../StaticCat.css';

const CAT_MEOWS = [
  'nyaa~ 🐾',
  'purrr ✨',
  'welcome! 🌸',
  'meow meow :3',
  'coding hard? 💻',
  '*gentle boop*',
];

export const StaticCat: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState('nyaa~ 🐾');

  const handleClick = () => {
    const randomMsg = CAT_MEOWS[Math.floor(Math.random() * CAT_MEOWS.length)];
    setBubbleText(randomMsg);
    setShowBubble(true);
    setTimeout(() => {
      setShowBubble(false);
    }, 2200);
  };

  return (
    <div 
      className="static-cat-container"
      onClick={handleClick}
      onMouseEnter={() => setShowBubble(true)}
      onMouseLeave={() => setShowBubble(false)}
      title="Click or hover to pet me!"
      role="button"
      tabIndex={0}
      aria-label="Cute pet sticker"
    >
      {showBubble && (
        <div className="static-cat-bubble">
          {bubbleText}
        </div>
      )}
      <div className="static-cat-wrapper">
        <img
          src="https://media.tenor.com/NRlBKLrZg3sAAAAi/cute-kawaii.gif"
          alt="Pixel cat companion"
          className="static-cat-img"
        />
      </div>
    </div>
  );
};

export default StaticCat;
