import { projects } from "@/data/projects";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function SingleProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project: Project | undefined = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="py-6 md:py-10 px-4 md:px-8 lg:px-0">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-1.5 md:gap-2.5">
          <div className="text-base md:text-lg leading-none uppercase">
            {project.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">{project.title}</h2>
        </div>
        <p className="text-sm text-[#757575]">{project.description}</p>
        <div className="flex flex-col gap-6 md:gap-6 md:flex-row justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#757575]">Techstack</p>
            <div className="flex items-center flex-wrap gap-2 md:gap-3">
              {project.skillsExtended?.map((skill, idx) => (
                <div key={idx} className="relative h-6 w-6">
                  <Image src={skill.icon} alt={`${skill.name} icon`} fill />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-3">
            {project.externalLinks.map((item, idx) => (
              <Link key={idx} href={item.link} target="_blank">
                <div className="relative text-[#757575] text-sm flex justify-between items-center gap-2 cursor-pointer group max-w-[200px]">
                  {item.text}
                  <Image src="/link.svg" alt="link" width={18} height={18} />
                  <div className="absolute bottom-0 left-0 h-[0.5px] bg-[#757575] w-full transform scale-x-100 transition-transform duration-600 group-hover:scale-x-50" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 md:py-10 md:pt-20">
        <div className="flex flex-col gap-10 md:gap-15">
          {project.images.map((url, idx) => (
            <div
              key={idx}
              className="relative h-[246px] md:h-[506px] w-full md:w-[900px] rounded-sm bg-[#f2f2f2] shadow-md p-4 md:px-13 md:py-5"
            >
              <div className="relative h-full w-full rounded-sm shadow-xl/30 transition-shadow duration-700 ease-in-out hover:shadow-none">
                <Image
                  src={url}
                  alt="image 1"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
