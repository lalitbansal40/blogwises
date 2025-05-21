import { Metadata } from 'next';
import BlogDetail from './BlogDetail';
import { Blog, getBlogById } from '@/lib/getBlogs';

export async function generateMetadata({
    searchParams,
}: {
    searchParams?: any;
}): Promise<Metadata> {
    const id = await searchParams?.id;
    const blog: Blog = await getBlogById(id);

    return {
        title: blog.title,
        description: `${blog}`,
    };
}

export default async function BlogDetailPage({
    searchParams,
}: {
    searchParams?: any;
}) {
    const id = await searchParams?.id
    return <BlogDetail id={id} />;
}
