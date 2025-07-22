import Image from "next/image";
import React from "react";

interface ExperienceCardProps {
  logo: string;
  company: string;
  position: string;
  duration: string;
  location: string;
}

const ExperienceCard = ({
  logo,
  company,
  position,
  duration,
  location,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-2.5">
        <div className="relative h-12 w-12">
          <Image
            src={logo}
            alt={`${company} company logo`}
            fill
            className="object-cover"
             sizes="48px"
          />
        </div>
        <div className="flex flex-col gap-1.5 py-2">
          <h3 className="text-base font-semibold leading-none">{company}</h3>
          <p className="text-sm text-[#404040] leading-none">{position}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 py-2">
        <h3 className="text-xs text-[#404040] leading-none">{duration}</h3>
        <p className="text-xs text-[#404040] leading-none">{location}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
