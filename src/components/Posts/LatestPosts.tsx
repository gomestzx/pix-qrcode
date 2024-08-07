'use client'
import { fetchLatestPosts } from '@/utils/contentful';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const LatestPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    console.log('Fetching latest posts...');
    const getPosts = async () => {
      const latestPosts = await fetchLatestPosts();
      setPosts(latestPosts as any);
    };

    getPosts();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full md:w-4/6 mx-auto">
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
  );
};

export default LatestPosts;
