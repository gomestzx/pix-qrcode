import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="w-full ">
      <Link
        href={`/posts/${props.slug}`}
        className="bg-white p-4 md:p-0 flex m-2 items-center justify-center flex-wrap md:flex-nowrap"
      >
        <Image
          className=""
          src={`/posts-previews/${props.img}`}
          width={200}
          height={200}
          alt=""
        />
        <div className="ml-4 w-full h-full mt-2 md:mt-0 flex flex-col items-start justify-center">
          <h2 className="pr-4 text-base font-bold text-teal-600">{props.title}</h2>
          <p className="text-sm pr-2">{props.subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
