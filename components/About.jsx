import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About Me
          </p>
          {/* <h2 className='py-4'>Who I Am</h2> */}
          <p className='py-2 text-gray-600'>
          After 10 years of a rewarding career in healthcare, I made the transition to software engineering. I’ve always been self-motivated in all facets of my life. Although I’m most proficient in front-end applications using JavaScript, HTML, CSS, React, Next, and Angular, I am a quick learner with a seemingly endless reservoir of energy. Outside of software development, I’m a part time musician, writer, pro wrestling announcer, podcast host, and graphic designer. 
          </p>
          <p className='py-2 text-gray-600'>
            
          </p>
          <Link legacyBehavior href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
