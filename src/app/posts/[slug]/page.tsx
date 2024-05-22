import Markdown from 'markdown-to-jsx';
import Head from 'next/head';
import fs from 'fs';
import matter from 'gray-matter';
import Banner from '@/components/Banner/Banner';
import getPostMetadata from '@/components/Posts/getPostMetadata';


const markdownOptions = {
  overrides: {
    h2: {
      component: 'h2',
      props: {
        style: { fontWeight: 'bold', fontSize: 24 }
      }
    },
    a: {
      component: 'a',
      props: {
        style: { color: '#0053DC' }
      }
    }
  }
} as any; 

const getPostContent = (slug: string) => {
  const folder = "src/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const { slug } = props.params;
  const { content, data } = getPostContent(slug);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
      </Head>
      <div className='font-montserrat'>
       
        <div className="flex justify-center">
          <div className="w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded flex flex-wrap shadow-lg bg-white flex-col">
            <div className="my-12 text-center">
              <h1 className="text-4xl font-semibold text-slate-600">{data.title}</h1>
              <p className="text-slate-500">{data.description}</p>
              <Banner />
            </div>
            <article>
              <Markdown options={markdownOptions}>{content}</Markdown>
            </article>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default PostPage;
