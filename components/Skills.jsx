import styles from "../styles/skills.module.scss";
import skills from "../public/skills";
import Slider from "react-slick";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Skills = () => {
  const { width } = useWindowDimensions();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: width > 768 ? 7 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className={styles.section}>
      <Slider {...settings}>
        {skills.map((skill) => (
          <img src={skill.img} alt={skill.name} key={skill.id} />
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
