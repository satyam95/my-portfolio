import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SkillItem {
  icon: string;
  name: string;
}

interface ProjectCardProps {
  image: string;
  alt: string;
  subtitle: string;
  title: string;
  extLink?: string;
  link?: string;
  skills?: SkillItem[];
}

const ProjectCard = ({
  image,
  alt,
  subtitle,
  title,
  link,
  skills,
  extLink,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Link href={extLink ? extLink : `/work/${link}`}>
        <div className="relative h-[228px] md:h-[269px] w-full md:w-[430px] rounded-sm bg-[#f2f2f2] p-2 md:px-3 md:py-4">
          <div className="relative h-full w-full rounded-sm shadow-xl transition-shadow duration-700 ease-in-out hover:shadow-none">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 430px"
              className="md:object-cover rounded-sm"
            />
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-1">
        <p className="text-[#1c1c1c] font-semibold text-xs tracking-[3px] uppercase">
          {subtitle}
        </p>
        <h3 className="text-[#1c1c1c] text-xl md:text-2xl font-bold">{title}</h3>
        {skills && (
          <div className="flex items-center gap-2 md:gap-2.5">
            {skills.map((skill, idx) => (
              <div key={idx} className="relative h-5 md:h-6 w-5 md:w-6">
                <Image src={skill.icon} alt={`${skill.name} icon`} fill />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
