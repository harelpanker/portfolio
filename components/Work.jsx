import projects from "../public/projects";
import ProjectHome from "./ProjectHome";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/work.module.scss";
import Link from "next/link";

const flickingPlugins = [new AutoPlay(5000, "NEXT")];

const Work = () => {
  const { width } = useWindowDimensions();
  return (
    <section className='section-dark'>
      <div className='container-home'>
        <div className='short-divider'></div>
        <h2 className='section-header'>Projects</h2>
        <Flicking
          className={styles.flicking}
          circular={true}
          gap={width > 768 ? 30 : 15}
          duration={400}
          plugins={flickingPlugins}
          moveType='freeScroll'>
          {projects.map((project) => (
            <ProjectHome key={project.id} {...project} />
          ))}
        </Flicking>

        <Link href='/projects'>
          <a className='btn btn-main btn-small'>Full Projects List</a>
        </Link>
      </div>
    </section>
  );
};

export default Work;
