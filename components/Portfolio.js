// components/Portfolio.js
import Link from 'next/link';
import Image from 'next/image';

const Portfolio = ({ allProjectsData, limit }) => {
  const projectsToShow = limit ? allProjectsData.slice(0, limit) : allProjectsData;

  return (
    
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-[640px]:grid-cols-1 gap-4 w-full px-[10%] py-20 pt-10">
        {projectsToShow.map(({ id, title, featuredImage, stack }) => (
          <div className="rounded-lg shadow-sm hover:shadow-lg flex flex-col justify-between items-center" key={id}>
            <Link href={`/projects/${id}`}>
              <Image
                src={featuredImage}
                alt={title}
                width={700}
                height={400}
                layout="responsive"
                className='rounded-t-lg aspect-[4/3] object-contain bg-slate-100'
              />
            </Link>
            <Link className='no-underline hover:no-underline text-current text-center hover:text-emerald-600 transition-all duration-300' href={`/projects/${id}`}>
              <h4 className='pt-4 px-8'>{title}</h4>
            </Link>
            <div className='flex gap-1 p-4 pt-0 justify-center flex-wrap'>
              {stack.map(tech => (
                <Link className="btn btn-light no-underline hover:no-underline !text-[14px]" key={tech} href={`/stack/${tech}`}>
                  {tech}
                </Link>
              ))}
            </div>
            <Link className='rounded-lg bg-green-500 hover:bg-green-600 transition-all text-white hover:text-white text-center duration-300 no-underline hover:no-underline w-fit mb-8 !px-[16px] py-[8px]' href={`/projects/${id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
  );
}

export default Portfolio;