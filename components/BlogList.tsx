import Image from 'next/image';
import Link from 'next/link';
type BlogPost = {
  title: string;
  description: string;
  imageurl?: string;
  category?: string;
  _id: string;
  blogid: string;
};

type BlogListPageProps = {
  blogs: BlogPost[];
};

function truncateWords(text: string, maxWords: number): string {
  const words = text.split(' ');
  return words.length > maxWords
    ? words.slice(0, maxWords).join(' ') + '...'
    : text;
}

export default function BlogCards({ blogs }: BlogListPageProps) {
  return (
    <div className=" py-12 px-6 sm:py-24 lg:px-6">
      <div className="max-w-8xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-4">
          {blogs?.map((post) => (
            <Link
              //  href={`blog/${post.blogid}`} 
              href={`blog?id=${post.blogid}`}
              key={post._id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:cursor-pointer ">
              <div className="h-48 w-full relative">
                <Image
                  src={post?.imageurl || ""}
                  alt={post?.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 flex items-center space-x-3">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {post?.category}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {post?.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  {truncateWords(post.description, 18)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  try {
    const res = await fetch(`https://blog-backend-3lxt.onrender.com/api/blogList?limit=5000`);
    const data = await res.json();

    return {
      props: {
        blogs: data.blogs, // ✅ only pass what's needed
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      notFound: true,
    };
  }
}
