import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '../../../data/blog-posts';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
  return []; // Don't generate any pages at build time
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="prose dark:prose-invert">
          <p>{post.excerpt}</p>
        </div>
      </div>
    </div>
  );
}
