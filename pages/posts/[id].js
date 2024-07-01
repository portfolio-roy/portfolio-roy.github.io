import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData} from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id);
    return {
        props: {
        postData
        }
    };
    }

const Post = ({ postData }) => {
    return (
        <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        {postData.featuredImage && (
          <div>
            <Image 
              src={postData.featuredImage} 
              alt={postData.title} 
              layout="responsive"
              width={700}
              height={400} 
            />
          </div>
        )}
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <div className={utilStyles.postCategories}>
          {postData.categories.map(category => (
            <Link className="btn btn-light" key={category} href={`/categories/${category}`}>
              {category}
            </Link>
          ))}
        </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        </Layout>
    );
    }

export default Post;