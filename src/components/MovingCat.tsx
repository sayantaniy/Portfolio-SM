import { useEffect, useRef } from "react";



const SPEED = 0.06;       // movement smoothness
const STOP_DISTANCE = 12; // how close before stopping

export default function MovingCat() {
  const catRef = useRef<HTMLImageElement | null>(null);

  // mouse position (static init – SAFE)
  const mouse = useRef({ x: 0, y: 0 });

  // cat position (static init – SAFE)
  const pos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;

    const animate = () => {
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;

      const distance = Math.hypot(dx, dy);

      // Stop jittering when close
      if (distance > STOP_DISTANCE) {
        pos.current.x += dx * SPEED;
        pos.current.y += dy * SPEED;
      }

      if (catRef.current) {
        catRef.current.style.transform = `
          translate(${pos.current.x}px, ${pos.current.y}px)
          scaleX(${dx < 0 ? -1 : 1})
        `;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <img
      ref={catRef}
      src="https://media.tenor.com/i8Mus4hXSQEAAAAi/ghost-cute.gif"
      alt="cursor-following cat"
      className="cat"
    />
  );
}
