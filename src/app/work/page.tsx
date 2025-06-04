import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectPage() {
  return (
    <div className="pb-16 pt-6 md:pb-20 md:pt-10 px-4 md:px-8 lg:px-0">
      <div className="flex flex-col gap-12 md:gap-15">
        <div className="flex flex-col gap-1 md:gap-2.5">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-[#757575] text-xl md:text-2xl font-medium">
            Here are some of my works.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
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
        <div className="justify-center flex">
          <button className="bg-black py-3 px-6 rounded-3xl text-white font-semibold text-base leading-[18px] max-w-fit shadow-lg/30 md:shadow-xl/30">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
