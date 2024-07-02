import { fetchEntries } from "@/utils/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from "next/image";
import Link from "next/link";


type PostProps = {
    params: {
        slug: string;
    };
};

export default async function PostPage({ params }: PostProps) {
    const posts = await fetchEntries();
    const post: any = posts.find((p: any) => p.fields.slug === params.slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="w-full md:w-4/6 mx-auto px-4 lg:px-0">
            <h1 className=" text-4xl lg:text-5xl font-darkerGrotesque font-extrabold">{post.fields.title}</h1>
            <p className=" text-lg lg:text-2xl mb-4 mt-6 border-b border-b-gray-200 pb-6">{post.fields.subtitle}</p>
            <div className=" flex w-full flex-wrap lg:flex-nowrap">
                <div className=" w-full lg:w-[65%] ">
                    <div className="prose prose-lg font-nunito leading-6 text-base font-light">{documentToReactComponents(post.fields.body)}</div>

                </div>
                <div className="hidden lg:block w-full lg:w-[35%] mt-6 md:mt-0 md:ml-6 p-4">
                    <div className="sticky top-10">
                        <Link href='placa-pix'>
                            <Image src='/widget.png?v=' width={260} height={375} alt="" />
                        </Link>                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await fetchEntries();

    return posts.map((post: any) => ({
        slug: post.fields.slug,
    }));
}
