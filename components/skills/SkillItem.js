import Image from 'next/image';

const SkillItem = ({ skill }) => {
  return (
    <li key={skill.id} className='w-full md:w-1/3 px-5'>
      <Image src={skill.icon} alt={skill.title} width={120} height={120} />
      <h2 className='mt-6 mb-3 text-2xl md:text-3xl font-bold'>
        {skill.title}
      </h2>
      <ul className='flex flex-wrap gap-3 justify-center opacity-80 font-medium text-sm'>
        {skill.items.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SkillItem;
