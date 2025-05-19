import { getBlogs, ApiResponse } from "@/lib/getBlogs";
import BlogList from "@/components/BlogList";
import HeroSection from "@/components/HeroSection";
import PaginationClient from "@/components/PaginationClient";
import type { Metadata } from "next";

// Declare the props explicitly
interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(): Promise<Metadata> {
  const data: ApiResponse = await getBlogs(1);

  const blogSummaries = data.blogs
    .map((b) => `${b.title}${b.description ? ` - ${b.description}` : ""}`)
    .join(" | ");

  return {
    title: "Blog Home",
    description: `Read: ${blogSummaries}`,
  };
}

export default async function Home({ searchParams }: Props) {
  const pageParam = searchParams?.page;
  const currentPage =
    typeof pageParam === "string" ? parseInt(pageParam, 10) : 1;

  const data: ApiResponse = await getBlogs(currentPage);

  return (
    <>
      <HeroSection />
      <BlogList blogs={data.blogs} />
      <PaginationClient totalPages={data.totalPages} />
    </>
  );
}
