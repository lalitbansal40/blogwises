import Image from 'next/image';
import Link from 'next/link';
import HeroSection from "@/components/HeroSection";
import { ApiResponse, getBlogs } from '@/lib/getBlogs';
import PaginationClient from '@/components/PaginationClient';
import { Metadata } from 'next';

function truncateWords(text: string, maxWords: number): string {
  const words = text.split(' ');
  return words.length > maxWords
    ? words.slice(0, maxWords).join(' ') + '...'
    : text;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: any;
}): Promise<Metadata> {
  const pageParam = searchParams?.page;
  const currentPage =
    typeof pageParam === "string" ? parseInt(pageParam, 10) : 1;
  const categoryParam = "Programming,Web Design,Photography";
  const categoryList = categoryParam
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  const blogs: ApiResponse = await getBlogs(currentPage, categoryList);

  return {
    title: "Technology",
    description: `${blogs}`,
  };
}

export default async function Technology({
  searchParams,
}: {
  searchParams?: any;
}) {
  const pageParam = searchParams?.page;
  const currentPage =
    typeof pageParam === "string" ? parseInt(pageParam, 10) : 1;
  const categoryParam = "Programming,Web Design,Photography";
  const categoryList = categoryParam
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean);

  const blogs: ApiResponse = await getBlogs(currentPage, categoryList);

  return (
    <>
      <HeroSection />
      <div className="py-12 px-6 sm:py-24 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
            Latest Blog Posts
          </h2>
          {blogs.blogs?.length > 0 ? (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {blogs.blogs.map((post) => (
                  <Link
                                       href={`/blog?${post.blogid}`}
                    key={post._id}
                    className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="h-48 w-full relative">
                      <Image
                        src={(post.imageurl || '').trim()}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-2xl"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block mb-2 bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {truncateWords(post.description, 18)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <PaginationClient totalPages={blogs.totalPages} />
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No blog posts found in selected categories.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
