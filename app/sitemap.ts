import { MetadataRoute } from 'next';
import { getBlogs, ApiResponse } from "@/lib/getBlogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data: ApiResponse = await getBlogs(1);
    const postUrls = data.blogs.map((post) => ({
        url: `https://alltypesblogs.online/blog/${post.blogid}`
    }));

    return [
        {
            url: 'https://alltypesblogs.online',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: 'https://alltypesblogs.online/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://alltypesblogs.online/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...postUrls,
    ];
}
