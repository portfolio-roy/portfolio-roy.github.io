import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import { getAllProjectIds, getProjectData} from '../../lib/projects';
import Head from 'next/head';
import Date from '../../components/date';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const getStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
    const projectData = await getProjectData(params.id);
    return {
        props: {
        projectData
        }
    };
    }

const Project = ({ projectData }) => {
    return (
        <Layout>
        <Head>
            <title>{projectData.title}</title>
        </Head>
       
        <div className='container flex md:flex-row sm:flex-col max-[640px]:flex-col gap-16 items-start justify-between'>
        {projectData.featuredImage && (
          <div className='md:w-2/5 sm:w-full'>
            <Image 
              src={projectData.featuredImage} 
              alt={projectData.title} 
              layout="responsive"
              width={700}
              height={400} 
              className='aspect-[4/3] object-contain bg-slate-100 rounded-lg shadow-sm'
            />
          </div>
        )}
        <article className='md:w-3/5 sm:w-full'>
            <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
            <div className={utilStyles.lightText}>
            <Date dateString={projectData.date} />
            </div>
            <div className='w-full d-flex justify-between items-start'>
            <div className='flex md:flex-row sm:flex-col-reverse max-[640px]:flex-col-reverse gap-16 items-start justify-between'>
            <div className="flex sm:w-full md:w-2/4 gap-1 justify-start flex-wrap mb-8">
          {projectData.stack.map(tech => (
            <Link className="rounded-lg bg-slate-100 hover:bg-slate-600 transition-all text-slate-900 hover:text-white text-center duration-300 no-underline hover:no-underline w-fit !px-[16px] py-[8px]" key={tech} href={`/stack/${tech}`}>
              {tech}
            </Link>
          ))}
        </div>
        <div className='sm:w-full md:w-2/4 d-flex gap-8 justify-content-end'>
        {projectData.repo && (
            <Link href={projectData.repo} className="rounded-lg bg-green-500 hover:bg-green-600 transition-all text-white hover:text-white text-center duration-300 no-underline hover:no-underline w-fit mb-8 !px-[16px] py-[8px]"><FontAwesomeIcon icon={faGithub} /> Repo</Link>
          )}
          {projectData.live && (
            <Link href={projectData.live} className="rounded-lg bg-green-500 hover:bg-green-600 transition-all text-white hover:text-white text-center duration-300 no-underline hover:no-underline w-fit mb-8 !px-[16px] py-[8px]"><FontAwesomeIcon icon={faExternalLinkAlt} />Live</Link>
          )}
        </div>
        </div>
        </div>
            <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </article>
        </div>
        </Layout>
    );
    }

export default Project;