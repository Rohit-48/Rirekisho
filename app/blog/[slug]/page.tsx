import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "../../lib/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28 md:py-36">
      <Link
        href="/"
        className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
      >
        ← Back
      </Link>

      <article className="mt-8">
        <header className="mb-10">
          <h1 className="text-2xl font-medium leading-tight tracking-tight text-foreground">
            {post.title}
          </h1>
          {post.date && (
            <time
              dateTime={post.date}
              className="mt-3 block font-mono text-xs text-muted"
            >
              {post.date}
            </time>
          )}
          {post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>
      </article>
    </main>
  );
}
