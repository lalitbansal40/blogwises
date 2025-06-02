// app/page.tsx
export const dynamic = "force-dynamic";

import { getBlogs, ApiResponse } from "@/lib/getBlogs";
import BlogList from "@/components/BlogList";
import HeroSection from "@/components/HeroSection";
import PaginationClient from "@/components/PaginationClient";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data: ApiResponse = await getBlogs(1);

  const blogSummaries = data.blogs
    .map((b) => `${b.title}${b.description ? ` - ${b.description}` : ""}`)
    .join(" | ");

  return {
    title: "BlogWises",
    description: blogSummaries,
  };
}

// ✅ DO NOT use any custom or imported PageProps type
export default async function Home({
  searchParams,
}: {
  searchParams?: any;
}) {
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
