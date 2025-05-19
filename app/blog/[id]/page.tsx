// app/blog/[id]/page.tsx
import { getBlogById } from '@/lib/getBlogs';
import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default async function BlogPage({ params }: Props) {
  const blogPost = await getBlogById(params.id);

  if (!blogPost) return notFound();

  return (
    <div className="min-h-screen pt-12 px-4 w-full">
      <div className=" mx-auto">
        <Card className="">
        <div className="space-y-2 p-2 pt-2 pb-12">
              <Typography
                variant="h3"
                className="!font-extrabold !text-gray-900 leading-tight"
              >
                {blogPost.title}
              </Typography>
              <span className="mt-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-md font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                {blogPost.category}
              </span>
            </div>
          <div className="relative w-full h-80 md:h-[28rem]">
            <Image
              src={blogPost.imageurl}
              alt={blogPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <CardContent className="p-8 space-y-6">

            <Typography
              variant="body1"
              className="!text-gray-700 text-lg leading-relaxed"
            >
              {blogPost.description}
            </Typography>

            <hr className=" my-6" />

            {/* Render HTML content safely */}
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
