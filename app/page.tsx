import BlogList from "@/components/BlogList";
import HeroSection from "@/components/HeroSection"
import Pagination from "@/components/Pagination"

type BlogPost = {
  title: string;
  description: string;
  imageurl?: string;
  category?: string;
  _id: string;
};

type ApiResponse = {
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
  blogs: BlogPost[];
};


export default async function Home() {
  const data:ApiResponse = await((await fetch(`https://blog-backend-3lxt.onrender.com/api/blogList?page=${1}`)).json());
  return (
    <>
      <HeroSection />
      <BlogList blogs={data.blogs} />
      <Pagination />
    </>
  );
}
