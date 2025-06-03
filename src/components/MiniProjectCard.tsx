import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MiniProjectCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
}

const MiniProjectCard = ({
  title,
  description,
  image,
  alt,
  link,
}: MiniProjectCardProps) => {
  return (
    <div className="flex flex-col gap-3 border-b-2 border-[#e8e8e8] last:border-none pb-4">
      <div className="flex flex-col gap-0">
        <h3 className="font-semibold text-xl md:text-2xl">{title}</h3>
        <p className="text-[#666] text-sm leading-[21px]">{description}</p>
      </div>
      <Link href={link}>
        <div className="relative w-[200px] h-[154px]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover rounded-md cursor-pointer shadow-xl/30"
          />
        </div>
      </Link>
    </div>
  );
};

export default MiniProjectCard;
