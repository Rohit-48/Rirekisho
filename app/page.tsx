import type { Metadata } from "next";
import { PortfolioPage } from "./components/portfolio";
import { getAllPosts } from "./lib/posts";

export const metadata: Metadata = {
  title: "Rohit Mandavkar — Web Engineer",
};

export default function Home() {
  const posts = getAllPosts();
  return <PortfolioPage posts={posts} />;
}
