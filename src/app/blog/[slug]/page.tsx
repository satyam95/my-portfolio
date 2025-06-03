import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

interface SingleBlogPageProps {
  params: { slug: string };
}

export default async function SingleBlogPage({ params }: SingleBlogPageProps) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/");
  }

  const { content } = blog;

  return <div className="prose mx-auto">{content}</div>;
}
