import profilePic from "../assets/pic4.png"; // make sure your image is in src/assets/

function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={profilePic} alt="Kent Ian Dela Rosa" className="profile-img" />

      <h2>
        Hello, I'm <span>Kent Ian Dela Rosa</span>
      </h2>
      <p className="role">UI/UX Designer</p>
      <p className="intro">
        I create intuitive and visually engaging user experiences through
        thoughtful design and modern principles.
      </p>
      <a href="#projects" className="btn">
        View My Work
      </a>
    </section>
  );
}

export default Hero;
