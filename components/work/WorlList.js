import WorkInfo from './WorkInfo';
import projectsData from '../../public/data/projects';

const WorlList = ({ number }) => {
  return (
    <div className='container'>
      <ul>
        {projectsData.map(
          (project, index) =>
            index < number && (
              <li
                key={project.id}
                className='w-full flex mb-12 md:mb-20 last:mb-0 h-52 sm:h-80 md:h-h-40 lg:h-h-50 xl:h-h-76'>
                <WorkInfo project={project} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default WorlList;
