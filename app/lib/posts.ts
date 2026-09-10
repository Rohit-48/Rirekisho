import fs from "fs";
import path from "path";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

const postsDirectory = path.join(process.cwd(), "app/data/posts");

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);
  if (!match) {
    return {
      metadata: {} as Record<string, string>,
      content: fileContent,
    };
  }

  const frontmatter = match[1];
  const content = match[2];
  const metadata: Record<string, string> = {};

  for (const line of frontmatter.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();
    value = value.replace(/^['"]([\s\S]*)['"]$/, "$1");
    metadata[key] = value;
  }

  return { metadata, content };
}

function parseTags(value: string): string[] {
  if (!value) return [];
  try {
    return JSON.parse(value.replace(/'/g, '"')) as string[];
  } catch {
    return [];
  }
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { metadata, content } = parseFrontmatter(fileContent);

      return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || "",
        excerpt: metadata.excerpt || "",
        tags: parseTags(metadata.tags || ""),
        content,
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
