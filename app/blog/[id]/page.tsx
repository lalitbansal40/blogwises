// app/blog/[id]/page.tsx

import BlogDetail from './BlogDetail';

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return <BlogDetail id={params.id} />;
}
