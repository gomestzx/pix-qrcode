import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/components/Posts/getPostMetadata";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";


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
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
      <div className="w-full p-4 md:px-8 md:py-8 lg:w-4/6 rounded flex flex-wrap  shadow-lg bg-white flex-col">
        <div className="my-12 text-center">
          <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
          <p className="text-slate-400 mt-2">{post.data.date}</p>
        </div>

        <article className="">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;