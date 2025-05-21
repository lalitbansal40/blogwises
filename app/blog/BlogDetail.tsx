// app/blog/[id]/BlogDetail.tsx
import { getBlogById } from '@/lib/getBlogs';
import { CardContent, Typography } from '@mui/material';
import Image from 'next/image';
type BlogPost = {
  title: string;
  description: string;
  imageurl: string;
  category: string;
  _id: string;
  content: string;
};


export default async function BlogDetail({ id }: { id: string }) {
  const blogPost: BlogPost = await getBlogById(id);

  return (
    <div className="min-h-screen pt-12  w-full">
      <div className="mx-auto">
        {/* <Card> */}
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

        <CardContent className="p-8 space-y-6 ">
          <div
            className="prose prose-indigo max-w-none px-8 "
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </CardContent>
      </div>
    </div>
  );
}
