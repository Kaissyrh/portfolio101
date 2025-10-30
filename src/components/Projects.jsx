import portfolioImg from "../assets/pic2.png";
import appRedesignImg from "../assets/pic1.png";
import dashboardImg from "../assets/pic3.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <img
            src={portfolioImg}
            alt="branding"
            className="project-img"
          />
          <h3>Logo Branding</h3>
          <p>Reinforcing my skills interms of logo branding</p>
        </div>

        <div className="project-card">
          <img
            src={appRedesignImg}
            alt="Davoice"
            className="project-img"
          />
          <h3>Davoice</h3>
          <p>
            Voice out for you!
          </p>
        </div>

        <div className="project-card">
          <img
            src={dashboardImg}
            alt="Myway"
            className="project-img"
          />
          <h3>MyWay</h3>
          <p>
            Best IT career path!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
