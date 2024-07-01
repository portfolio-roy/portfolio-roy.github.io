import { getSortedProjectsData } from '../../lib/projects';
import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';

export const getStaticPaths = async () => {
  const allProjectsData = getSortedProjectsData();
  const stack = new Set(allProjectsData.flatMap(project => project.stack || []));

  const paths = Array.from(stack).map(tech => ({
    params: { tech }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const allProjectsData = getSortedProjectsData();
  const filteredProjects = allProjectsData.filter(project =>
    project.stack.includes(params.tech)
  );

  return {
    props: {
      tech: params.tech,
      projects: filteredProjects
    }
  };
};

const Tech = ({ tech, projects }) => {
  return (
    <Layout>
      <h1 className={utilStyles.headingXl}>Tech: {tech}</h1>
      <ul className={utilStyles.list}>
        {projects.map(({ id, title, date }) => (
          <li key={id} className={utilStyles.listItem}>
            <Link href={`/projects/${id}`}>
             {title}
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Tech;
