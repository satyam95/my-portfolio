import Image from "next/image";
import { File, Linkedin, Github } from "lucide-react";
import { Link } from "next-view-transitions";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import MiniProjectCard from "@/components/MiniProjectCard";
import { miniprojects } from "@/data/minprojects";
import { blogs } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Satyam Sagar",
  description: "Portfolio website",
};

export default function Home() {
  return (
    <div>
      <div className="py-6 px-4 md:px-8 lg:px-0">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <div className="relative h-25 md:h-[127px] w-25 md:w-[127px]">
              <Image
                src="/sample-pic.jpeg"
                alt="profile picture"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="h-25 md:h-[127px] w-25 md:w-[127px] rounded-full bg-[#e6e6e64f] hover:scale-80 transition-transform duration-500 cursor-pointer">
              <Link
                href=""
                target="_blank"
                className="h-full w-full flex justify-center items-center"
              >
                <File size={40} />
              </Link>
            </div>
            <div className="h-25 md:h-[127px] w-25 md:w-[127px] rounded-full bg-[#e6e6e64f] hover:scale-80 transition-transform duration-500 cursor-pointer">
              <Link
                href="https://www.linkedin.com/in/satyamsagar95/"
                target="_blank"
                className="h-full w-full flex justify-center items-center"
              >
                <Linkedin size={40} />
              </Link>
            </div>
            <div className="h-25 md:h-[127px] w-25 md:w-[127px] rounded-full bg-[#e6e6e64f] hover:scale-80 transition-transform duration-500 cursor-pointer">
              <Link
                href="https://github.com/satyam95/"
                target="_blank"
                className="h-full w-full flex justify-center items-center"
              >
                <Github size={40} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-3xl md:text-[40px] md:leading-none font-semibold">
              Hello, I’m Satyam, a Frontend Developer and UI Engineer.
            </h1>
            <p className="text-lg md:text-xl text-[#404040]">
              At the heart of my work is a commitment in mergin design,
              community and business together. I have worked with top companies
              such as Google, Figma, DaoHQ, Redxam and many others.
            </p>
          </div>
          <Link
            href=""
            className="bg-black py-3 px-6 rounded-3xl text-white font-semibold text-base leading-[18px] max-w-fit shadow-lg/30 md:shadow-xl/30"
          >
            Say Hi 👋
          </Link>
        </div>
      </div>
      <div className="py-16 md:py-20 px-4 md:px-8 lg:px-0">
        <div className="flex flex-col gap-6">
          <h2 className="text-[#777] text-2xl leading-none font-medium">
            My Work
          </h2>
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {projects.slice(0, 6).map((project, idx) => (
                <ProjectCard
                  key={idx}
                  image={project.image}
                  alt={project.alt}
                  subtitle={project.subtitle}
                  title={project.title}
                  link={project.slug}
                  skills={project.skills}
                />
              ))}
            </div>
            <Link
              href="/work"
              className="mx-auto bg-black py-3 px-6 rounded-3xl text-white font-semibold text-base leading-[18px] max-w-fit shadow-lg/30 md:shadow-xl/30"
            >
              Show More
            </Link>
          </div>
        </div>
      </div>
      <div className="border-[#2222220d] border-t py-16 md:py-20 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="flex flex-col gap-5 md:w-1/2">
            <p className="text-[#8f8f8f] text-base font-medium">
              Work Experience
            </p>
            <div className="flex flex-col gap-6">
              {experiences.map((experience, idx) => (
                <ExperienceCard
                  key={idx}
                  logo={experience.logo}
                  company={experience.company}
                  position={experience.position}
                  duration={experience.duration}
                  location={experience.location}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 md:w-1/2">
            <p className="text-[#8f8f8f] text-base font-medium">Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillBadge key={skill} text={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#2222220d] border-t py-16 md:py-20 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="flex flex-col gap-4 md:w-1/2">
            <p className="text-[#8f8f8f] text-base font-medium">Articles</p>
            {blogs.map((blog, idx) => (
              <BlogCard key={idx} title={blog.title} slug={blog.slug} />
            ))}
          </div>
          <div className="flex flex-col gap-5 md:w-1/2">
            <p className="text-[#8f8f8f] text-base font-medium">
              Mini Projects
            </p>
            {miniprojects.map((project, idx) => (
              <MiniProjectCard
                key={idx}
                title={project.title}
                description={project.description}
                image={project.image}
                alt={project.alt}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
