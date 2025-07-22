import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  // You may want to fetch the blog data here for dynamic title/description
  // For now, use a generic fallback
  const { slug } = await params;
  return {
    title: `Blog | Satyam Sagar`,
    description: `Read insightful articles on frontend development, UI engineering, and more by Satyam Sagar.`,
    openGraph: {
      title: `Blog | Satyam Sagar`,
      description: `Read insightful articles on frontend development, UI engineering, and more by Satyam Sagar.`,
      type: "article",
      url: `https://satyamsagar.com/blog/${slug}`,
      images: [
        {
          url: "/sample-pic.jpeg",
          width: 800,
          height: 600,
          alt: "Satyam Sagar profile picture",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog | Satyam Sagar`,
      description: `Read insightful articles on frontend development, UI engineering, and more by Satyam Sagar.`,
      images: [
        {
          url: "/sample-pic.jpeg",
          alt: "Satyam Sagar profile picture",
        },
      ],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/");
  }

  const { content } = blog;

  return (
    <main className="pb-16 pt-6 md:pb-20 md:pt-10 px-4 md:px-8 lg:px-0 prose mx-auto">
      {content}
    </main>
  );
}
