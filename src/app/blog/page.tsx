'use client'
import { useEffect, useState } from "react";
import { fetchEntries, fetchTotalEntries } from "@/utils/contentful";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
    const [posts, setPosts] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const postsPerPage = 8;

    useEffect(() => {
        const getPosts = async () => {
            const fetchedPosts = await fetchEntries(postsPerPage, (currentPage - 1) * postsPerPage);
            setPosts(fetchedPosts);

            const totalEntries = await fetchTotalEntries();
            setTotalPages(Math.ceil(totalEntries / postsPerPage));
        };

        getPosts();
    }, [currentPage]);

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={` w-8 py-1 border-2  rounded-lg ${i === currentPage ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white text-blue-500 border-gray-300'}`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="w-full md:w-5/6 mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col lg:w-3/4 gap-2">
                    {posts.map((post: any) => (
                        <div className="w-full p-4 md:p-2 flex items-center justify-start lg:flex-nowrap" key={post.sys.id}>
                            <Link href={`/blog/${post.fields.slug}`} className="flex items-center justify-center w-full flex-wrap md:flex-nowrap">
                                {post.fields.image && (
                                    <img
                                        src={`https:${post.fields.image.fields.file.url}`}
                                        alt={post.fields.title}
                                        className="w-full md:w-1/3 h-40 object-cover"
                                        width={300}
                                        height={200}
                                    />
                                )}
                                <div className="ml-6 w-full md:w-2/3 flex flex-col mt-4 md:mt-0">
                                    <h2 className="text-2xl font-bold text-black mb-1 font-darkerGrotesque">{post.fields.title}</h2>
                                    <div className="text-sm text-blue-600 mb-2">
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
            <div className="flex justify-center mt-4 gap-2 items-center">
                <span className=" text-sm">{`Página ${currentPage} de ${totalPages}`}</span>
                {
                    currentPage > 1 && <button className="bg-white text-gray-600 border-2 rounded-lg w-8 py-1 border-gray-300" onClick={() => setCurrentPage(currentPage - 1)}> {'<<'}</button>
                }
                <div className=" hidden md:flex gap-2"> {renderPagination()}</div>

                {currentPage !== totalPages &&
                    <button className="bg-white text-gray-600 border-2 rounded-lg w-8 py-1 border-gray-300" onClick={() => setCurrentPage(currentPage + 1)}> {'>>'}</button>
                }
            </div>
        </div>
    );
}
