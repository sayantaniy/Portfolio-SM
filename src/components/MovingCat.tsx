import { useEffect, useRef, useState } from "react";

const SPEED = 0.055;       // Smooth lerp speed
const STOP_DISTANCE = 14;  // Distance threshold to avoid micro-jitter

const CUTE_PHRASES = [
  "boo! 👻",
  "following you ✨",
  "whisper... 🌸",
  "floating around ~",
  "nice to meet you!",
];

export default function MovingCat() {
  const catRef = useRef<HTMLDivElement | null>(null);
  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const bubbleTimer = useRef<number | null>(null);

  // Mouse position
  const mouse = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 300,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 300,
  });

  // Current sprite position
  const pos = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 300,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 300,
  });

  const lastDirection = useRef<number>(1);
  const idleTimer = useRef<number | null>(null);
  const isNearForm = useRef<boolean>(false);

  useEffect(() => {
    // Only run on non-touch devices with pointer: fine
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const formElement = target?.closest("form, input, textarea, .contact-form-card");

      if (formElement) {
        // When cursor is inside or over a form, position ghost safely outside the form to avoid blocking inputs
        isNearForm.current = true;
        const rect = formElement.getBoundingClientRect();
        
        // Float safely to the outer right edge or top-right corner of the form container
        const safeX = rect.right + 24 > window.innerWidth - 64 
          ? rect.left - 70 
          : rect.right + 18;
          
        mouse.current.x = Math.max(16, safeX);
        mouse.current.y = Math.max(80, rect.top + 10);

        // Hide speech bubble so it never obstructs text
        setBubbleText(null);
      } else {
        isNearForm.current = false;
        mouse.current.x = e.clientX + 16;
        mouse.current.y = e.clientY + 16;
      }

      // Reset idle timer
      if (idleTimer.current) {
        window.clearTimeout(idleTimer.current);
      }
      idleTimer.current = window.setTimeout(() => {
        // Only show cute thoughts when not hovering over a form
        if (!isNearForm.current && Math.random() < 0.35) {
          const phrase = CUTE_PHRASES[Math.floor(Math.random() * CUTE_PHRASES.length)];
          setBubbleText(phrase);
          if (bubbleTimer.current) window.clearTimeout(bubbleTimer.current);
          bubbleTimer.current = window.setTimeout(() => setBubbleText(null), 3000);
        }
      }, 4000);
    };

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.matches("input, textarea")) {
        isNearForm.current = true;
        const rect = target.getBoundingClientRect();
        mouse.current.x = Math.min(window.innerWidth - 70, rect.right + 24);
        mouse.current.y = Math.max(80, rect.top - 20);
        setBubbleText(null);
      }
    };

    const handleFocusOut = () => {
      isNearForm.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("focusout", handleFocusOut);

    let animationId: number;
    let clock = 0;

    const animate = () => {
      clock += 0.04;
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      const distance = Math.hypot(dx, dy);

      if (distance > STOP_DISTANCE) {
        pos.current.x += dx * SPEED;
        pos.current.y += dy * SPEED;
        if (Math.abs(dx) > 1) {
          lastDirection.current = dx < 0 ? -1 : 1;
        }
      }

      // Add gentle floating bob
      const bobY = Math.sin(clock) * 4;

      if (catRef.current) {
        catRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y + bobY}px, 0)`;
        catRef.current.style.opacity = isNearForm.current ? "0.3" : "1";
        catRef.current.style.pointerEvents = "none";
        
        const img = catRef.current.querySelector("img");
        if (img) {
          img.style.transform = `scaleX(${lastDirection.current})`;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
      cancelAnimationFrame(animationId);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      if (bubbleTimer.current) window.clearTimeout(bubbleTimer.current);
    };
  }, []);

  return (
    <div ref={catRef} className="cat-follower-container">
      {bubbleText && (
        <div className="cat-speech-bubble">
          {bubbleText}
        </div>
      )}
      <img
        src="https://media.tenor.com/i8Mus4hXSQEAAAAi/ghost-cute.gif"
        alt="floating spirit companion"
        className="cat-follower-sprite"
        loading="eager"
      />
    </div>
  );
}
