import { MetadataRoute } from 'next';
import { getBlogs, ApiResponse } from "@/lib/getBlogs";
export default async function sitemap(): MetadataRoute.Sitemap {
    const data: ApiResponse = await getBlogs(1);
    const postUrls = data.blogs.map((post) => ({
        url: `https://alltypesblogs.online/blog/${post.blogid}`
    }));
    return [
        {
            url: 'https://alltypesblogs.online',
            lastModified: new Date(),
        },
        {
            url: 'https://alltypesblogs.online/about',
            lastModified: new Date(),
        },
        {
            url: 'https://alltypesblogs.online/contact',
            lastModified: new Date(),
        },
        ...postUrls
    ];
}
