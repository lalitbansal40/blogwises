// app/blog/[id]/metadata.ts
import { getBlogById } from '@/lib/getBlogs';
import { Metadata } from 'next';

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blog = await getBlogById(params.id);

    if (!blog) return {};

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            images: [{ url: blog.imageurl }],
        },
    };
}
