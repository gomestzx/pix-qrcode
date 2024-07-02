'use client'
import { fetchEntries } from "@/utils/contentful";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
    const posts = await fetchEntries();
    
    return (
        <div className="w-full md:w-5/6 mx-auto">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col lg:w-3/4 gap-2">
                    {posts.map((post: any) => (
                        <div className="w-full p-4 md:p-2 flex items-center justify-start lg:flex-nowrap" key={post.sys.id}>
                            <Link href={`/blog/${post.fields.slug}`} className="flex items-center justify-center w-full">
                                {post.fields.image && (
                                    <img src={`https:${post.fields.image.fields.file.url}`} alt={post.fields.title} className="w-1/3 h-auto object-cover" />
                                )}
                                <div className="ml-6 w-2/3 flex flex-col">
                                    <h2 className="text-2xl font-bold text-black mb-1 font-darkerGrotesque">{post.fields.title}</h2>
                                    <div className="text-sm text-teal-600 mb-2">
                                        <p>Postado em {new Date(post.fields.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                                    </div>
                                    <p className="text-gray-700 text-base font-nunito">{post.fields.subtitle}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="hidden lg:block w-full md:w-1/4 mt-6 md:mt-0 md:ml-6 p-4">
                <div className="sticky top-10">
                    <Link href='placa-pix'>
                    <Image src='/widget.png?v=' width={260} height={375} alt="" />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
