import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import projecticon from '../../assets/projecticon.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={projecticon}
          link="https://sws.delhi.gov.in/home"
          h3="Single Window System"
          p="Digital Platform"
        />
        <ProjectCard
          src={projecticon}
          link="https://cguadfinance.in/"
          h3="SUDA"
          p="Urban Administration <br> And Development - CG UAD"
        />
      </div>
    </section>
  );
}

export default Projects;
