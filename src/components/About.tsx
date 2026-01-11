const ABOUT_TEXT = [
  "I’m a passionate and detail-oriented developer who enjoys turning ideas into clean, functional, and user-friendly digital solutions. I have a strong interest in building well-structured applications and writing efficient, readable code that solves real-world problems. I focus on understanding the fundamentals deeply, as I believe a solid foundation is key to long-term growth in software development. Currently, I’m sharpening my skills in programming and modern web technologies through hands-on projects and continuous learning. I enjoy experimenting with new tools, improving existing solutions, and refining my approach based on best practices. Problem-solving is something I genuinely enjoy, especially when it involves breaking down complex concepts into simple, logical steps. I’m always eager to learn, adapt, and grow as a developer. Whether working independently or collaborating with others, I value clean code, thoughtful design, and consistent improvement. My goal is to keep building meaningful projects that challenge me, strengthen my skills, and reflect my passion for technology and development.",
];

export const About = () => {
  return (
    <section className="about-section glass">
      <h2 className="section-title">About</h2>
      {ABOUT_TEXT.map((text, index) => (
        <p key={index} className="about-text">
          {text}
        </p>
      ))}
    </section>
  );
};

