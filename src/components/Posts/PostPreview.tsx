import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";


const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="w-full lg:w-2/4"
    >
      <div className="border border-slate-300 rounded-md shadow-sm bg-white flex m-2 items-center justify-center">
        <Image className="" src={`/posts-previews/${props.img}`} width={200} height={200} alt="" />
        <div className="ml-4 w-full h-full flex flex-col items-start justify-center">
          <h2 className="font-semibold text-sm pr-4">{props.title}</h2>
          <Link className="text-blue-600 text-sm hover:underline mb-4 font-medium" href={`/posts/${props.slug}`}>
            Ler artigo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;