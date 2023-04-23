import Image from 'next/image';
import Link from 'next/link';
import appPost from '../public/assets/projects/appPost.png';
import polyImg from '../public/assets/projects/polyimg.png'
import realtorImg from '../public/assets/projects/realtorapp.png'
import wordleimg from '../public/assets/projects/wordleimg.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Wordle-Clone'
            backgroundImg={wordleimg}
            projectUrl='https://wordle-x7jz-p0qt1bovl-ampersand22.vercel.app/'
            tech='React JS'
          />
          <ProjectItem
            title='App.Post'
            backgroundImg={appPost}
            projectUrl='/apppost'
            tech='React JS'
          />
          <ProjectItem
            title='polyBeast'
            backgroundImg={polyImg}
            projectUrl='/polybeast'
            tech='React/Reactronica'

          />
          <ProjectItem
            title='Realtor App'
            backgroundImg={realtorImg}
            projectUrl='/realtor'
            tech='Next.js'

          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
