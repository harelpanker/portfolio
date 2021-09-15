import skillsData from '../../public/data/skills';
import SkillItem from './SkillItem';

const SkillList = () => {
  return (
    <ul className='md:flex md:flex-wrap md:gap-y-36 grid grid-cols-1 gap-12 md:gap-0 md:justify-around text-center'>
      {skillsData.map((skill) => (
        <SkillItem skill={skill} />
      ))}
    </ul>
  );
};

export default SkillList;
