import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getSortedProjectsData } from '../lib/projects';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from '../components/SocialLinks';
import Portfolio from '../components/Portfolio';
import ProgressBar from '../components/ProgressBar';
import ContactForm from '../components/ContactForm';

export default function Home({ allPostsData, allProjectsData }) {
  const portfolioLimit = 6;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id="welcome">
        <div className="section-content welcome">
          <h1 className="greetings text-center">
            <span className="neutrals">Hey there. I'm Utsargo.</span><br />
            <span className="success">I'm a full-stack web developer</span>
          </h1>
          <p className="text-center neutrals">
            I can help you build a product, feature or website Look through some
            of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>
          <SocialLinks />
          <Link href="#portfolio" className="down-arrow !max-[640px]:bottom-1">
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </div>
      </section>

      <section id='portfolio'>
        <div className="container flex flex-col items-center pt-20">
        <h2>My Recent Works</h2>
        <Portfolio allProjectsData={allProjectsData} limit={portfolioLimit} />
        </div>
      </section>
      <section className="flex flex-col items-center md:bg-[url('/images/about-desktop.png')] max-[640px]:bg-[url('/images/about-me.png')] bg-no-repeat max-[640px]:bg-center bg-center_top max-[640px]:bg-repeat-y" id='about'>
        
        <div className='container flex sm:flex-col max-[640px]:flex-col max-[640px]:items-center md:flex-row md:items-start gap-4'>
          <div className='w-2/5 flex flex-col items-center'>
            <Image src='/images/profile-cropped.jpg' alt='Utsargo Roy' width={300} height={300} className='rounded-full' />
          </div>
          <div className='w-3/5 max-[640px]:w-full p-8 md:pr-20'>
          <h2 className='text-left max-[640px]:text-center'>About Me</h2>
          <p>
          I'm a full-stack web developer with a passion for building beautiful
          and functional websites. I have experience working with both front-end
          and back-end technologies, and I'm always looking to learn new things.
          I'm currently looking for new opportunities, so if you have a project
          you need help with, don't hesitate to contact me.
        </p>
        <Link href='/documents/resume-utsargo-roy.pdf' className='rounded-lg bg-green-500 hover:bg-green-600 transition-all text-white hover:text-white text-center duration-300 no-underline hover:no-underline w-fit mb-8 !px-[16px] py-[8px]'>Get My Resume</Link>

          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-[640px]:grid-cols-1 gap-4 w-full px-[10%] py-[10%]">
          <div className="rounded-lg shadow-sm hover:shadow-lg flex flex-col justify-start items-center bg-slate-200">
            <Image
              src="/images/icon-languages.png"
              alt="Languages"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-full object-cover object-[center_bottom] !w-[120px] !h-[120px] pt-4"
            />
            <h4 className="pt-0 px-8">Languages</h4>
            <div className='text-left p-8 pt-1 w-full'>
            HTML
            <ProgressBar progress={90} bgColor="bg-blue-500" />
            CSS
            <ProgressBar progress={90} bgColor="bg-green-500" />
            JavaScript
            <ProgressBar progress={85} bgColor="bg-yellow-500" />
            Python
            <ProgressBar progress={80} bgColor="bg-teal-500" />
            Ruby
            <ProgressBar progress={80} bgColor="bg-red-500" />
            PostgreSQL
            <ProgressBar progress={70} bgColor="bg-orange-500" />
            MySQL
            <ProgressBar progress={70} bgColor="bg-purple-500" />
            CommonLisp
            <ProgressBar progress={50} bgColor="bg-indigo-500" />
            </div>
          </div>
          <div className="rounded-lg shadow-sm hover:shadow-lg flex flex-col justify-start items-center bg-slate-200">
            <Image
              src="/images/icon-frameworks.png"
              alt="Languages"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-full object-cover object-[center_bottom] !w-[120px] !h-[120px] pt-4"
            />
            <h4 className="pt-0 px-8">Frameworks</h4>
            <div className='text-left p-8 pt-1 w-full'>
            WordPress
            <ProgressBar progress={95} bgColor="bg-blue-500" />
            BootStrap
            <ProgressBar progress={90} bgColor="bg-blue-500" />
            ReactJS
            <ProgressBar progress={90} bgColor="bg-green-500" />
            NextJS
            <ProgressBar progress={80} bgColor="bg-yellow-500" />
            NodeJS
            <ProgressBar progress={70} bgColor="bg-teal-500" />
            Ruby on Rails
            <ProgressBar progress={85} bgColor="bg-red-500" />
            Django
            <ProgressBar progress={75} bgColor="bg-orange-500" />
            </div>
          </div>
          <div className="rounded-lg shadow-sm hover:shadow-lg flex flex-col justify-start items-center bg-slate-200">
            <Image
              src="/images/icon-skills.png"
              alt="Languages"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-full object-cover object-[center_bottom] !w-[120px] !h-[120px] pt-4"
            />
            <h4 className="pt-0 px-8">Skills</h4>
            <div className='text-left p-8 pt-1 w-full'>
            Git
            <ProgressBar progress={90} bgColor="bg-blue-500" />
            Hreoku
            <ProgressBar progress={90} bgColor="bg-green-500" />
            Netlify
            <ProgressBar progress={70} bgColor="bg-yellow-500" />
            RSpect
            <ProgressBar progress={75} bgColor="bg-teal-500" />
            TDD
            <ProgressBar progress={70} bgColor="bg-red-500" />
            Time Management
            <ProgressBar progress={90} bgColor="bg-orange-500" />
            Teamwork
            <ProgressBar progress={90} bgColor="bg-purple-500" />
            Cross-cultural Communication
            <ProgressBar progress={85} bgColor="bg-indigo-500" />
            RestAPI's
            <ProgressBar progress={80} bgColor="bg-pink-500" />
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className="md:bg-[url('/images/footer-desktop.png')] max-[640px]:bg-[url('/images/illustration-contact-formfooter-mobile.png')] bg-no-repeat max-[640px]:bg-left-bottom bg-center_bottom">
        <div className="container flex md:flex-row max-[640px]:flex-col !px-[10%] py-10 gap-8 items-start">
          <div className='md:w-1/2 max-[640px]:w-full flex flex-col justify-start'>
            <h2>Contact Me</h2>
            <p>
              If you have a project you'd like to discuss, or if you just want to
              say hi, feel free to contact me using the form below. I'll get back
              to you as soon as I can.
            </p>
            </div>
            <div className='md:w-1/2 max-[640px]:w-full'>
            <ContactForm />
            </div>
        </div>

      </section>
      
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}