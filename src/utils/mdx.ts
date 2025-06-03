import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data/blogs", `${slug}.mdx`),
      "utf-8"
    );

    if (!singleBlog) {
      return null;
    }

    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (error) {
    console.error(`Error reading blog file for ${slug}:`, error);
  }
};
