// app/blog/[id]/BlogDetail.tsx
"use client";

import { useEffect, useState } from 'react';
import { getBlogById } from '@/lib/getBlogs';
import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

type BlogPost = {
  title: string;
  description: string;
  imageurl: string;
  category: string;
  _id: string;
  content: string;
};

type BlogDetailProps = {
  id: string;
};

export default function BlogDetail({ id }: BlogDetailProps) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlogPost(data);
      } catch (err) {
        setError('Failed to load blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="p-8">Loading...</p>;
  if (error || !blogPost) return <p className="p-8 text-red-600">{error || 'Not found'}</p>;

  return (
    <div className="min-h-screen pt-12 px-4 w-full">
      <div className="mx-auto">
        <Card>
          <div className="space-y-2 p-2 pt-2 pb-12">
            <Typography variant="h3" className="!font-extrabold !text-gray-900 leading-tight">
              {blogPost.title}
            </Typography>
            <span className="mt-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-md font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
              {blogPost.category}
            </span>
          </div>

          <div className="relative w-full h-80 md:h-[28rem]">
            <Image
              src={blogPost.imageurl.trim()}
              alt={blogPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <CardContent className="p-8 space-y-6">
            <Typography variant="body1" className="!text-gray-700 text-lg leading-relaxed">
              {blogPost.description}
            </Typography>

            <hr className="my-6" />

            <div
              className="prose prose-indigo max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
