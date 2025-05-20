import { Metadata } from "next";

// lib/getBlogs.ts
export type BlogPost = {
    title: string;
    description: string;
    imageurl?: string;
    category?: string;
    _id: string;
    blogid: string;
};

export type ApiResponse = {
    page: number;
    limit: number;
    totalPages: number;
    totalItems: number;
    blogs: BlogPost[];
};

export interface Blog {
    _id: string;
    title: string;
    description: string;
    imageurl: string;
    category: string;
    content: string;
}


export async function getBlogs(page: number = 1): Promise<ApiResponse> {
    const res = await fetch(`https://blog-backend-3lxt.onrender.com/api/blogList?page=${page}`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");

    return res.json();
}


export async function getBlogById(id: string): Promise<Blog> {
    const res = await fetch(`https://blog-backend-3lxt.onrender.com/api/blog/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");

    return res.json();
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