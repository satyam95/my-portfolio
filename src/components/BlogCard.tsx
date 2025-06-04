import { Link } from "next-view-transitions";
import React from "react";

interface BlogCardProps {
  title: string;
  slug: string;
}

const BlogCard = ({ title, slug }: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-0 border-b-2 border-[#e8e8e8] last:border-none pb-6">
      <h3 className="font-semibold text-xl md:text-2xl">{title}</h3>
      <Link
        href={slug}
        className="w-fit text-[#666] text-sm font-medium leading-[21px] underline underline-offset-6 transition-colors duration-600 hover:decoration-transparent"
      >
        Continue Reading
      </Link>
    </div>
  );
};

export default BlogCard;
