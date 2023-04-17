import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import appPost from '../public/assets/projects/appPost.png';
import polyImg from '../public/assets/projects/polyimg.png'
import realtorImg from '../public/assets/projects/realtorapp.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
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
