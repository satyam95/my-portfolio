import Image from "next/image";
import { Link } from "next-view-transitions";
import React from "react";

interface SkillItem {
  icon: string;
  name: string;
}

/**
 * ProjectCard displays a project with image, title, subtitle, and skills.
 * @param image - Project image URL
 * @param alt - Alt text for the image
 * @param subtitle - Project subtitle
 * @param title - Project title
 * @param extLink - External link (optional)
 * @param link - Internal link (optional)
 * @param skills - Array of skills (optional)
 */
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
    <div className="flex flex-col gap-4 w-full max-w-[430px] mx-auto">
      <Link href={extLink ? extLink : `/work/${link}`}>
        <div className="relative h-[229px] md:h-[251px] w-full rounded-sm shadow-md/30 transition-shadow duration-700 ease-in-out hover:shadow-none">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 460px"
            className="md:object-cover rounded-sm"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-1">
        <p className="text-[#1c1c1c] font-semibold text-xs tracking-[3px] uppercase">
          {subtitle}
        </p>
        <h3 className="text-[#1c1c1c] text-xl md:text-2xl font-bold">
          {title}
        </h3>
        {skills && (
          <div className="flex items-center gap-2 md:gap-2.5">
            {skills.map((skill) => (
              <div key={skill.name} className="relative h-5 md:h-6 w-5 md:w-6">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 20px, 24px"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
