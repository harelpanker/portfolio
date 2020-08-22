import styles from "../styles/skills.module.scss";
import skills from "../public/skills";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import useWindowDimensions from "../hooks/useWindowDimensions";

const flickingPlugins = [new AutoPlay(2000, "NEXT")];

const Skills = () => {
  const { width } = useWindowDimensions();
  const gap = width > 768 ? 30 : 10;

  return (
    <section className={styles.section}>
      <div className={styles.container}></div>
      <Flicking
        className={styles.flicking}
        circular={true}
        gap={gap}
        duration={500}
        plugins={flickingPlugins}
        moveType='freeScroll'>
        {skills.map((skill) => (
          <img src={skill.img} alt={skill.name} key={skill.id} />
        ))}
      </Flicking>
    </section>
  );
};

export default Skills;
