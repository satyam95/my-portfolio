import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function SingleBlogPage({ params }: { params: Params }) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/");
  }

  const { content } = blog;

  return <div className="prose mx-auto">{content}</div>;
}
