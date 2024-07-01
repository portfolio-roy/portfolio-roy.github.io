import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';

export const getStaticPaths = async () => {
  const allPostsData = getSortedPostsData();
  const categories = new Set(allPostsData.flatMap(post => post.categories || []));

  const paths = Array.from(categories).map(category => ({
    params: { category }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const allPostsData = getSortedPostsData();
  const filteredPosts = allPostsData.filter(post =>
    post.categories.includes(params.category)
  );

  return {
    props: {
      category: params.category,
      posts: filteredPosts
    }
  };
};

const Category = ({ category, posts }) => {
  return (
    <Layout>
      <h1 className={utilStyles.headingXl}>Category: {category}</h1>
      <ul className={utilStyles.list}>
        {posts.map(({ id, title, date }) => (
          <li key={id} className={utilStyles.listItem}>
            <Link href={`/posts/${id}`}>
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

export default Category;
