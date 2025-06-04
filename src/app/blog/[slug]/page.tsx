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

  return (
    <div className="pb-16 pt-6 md:pb-20 md:pt-10 px-4 md:px-8 lg:px-0 prose mx-auto">
      {content}
    </div>
  );
}
