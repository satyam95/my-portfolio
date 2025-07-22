"use client";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import React from "react";
import useInfiniteScroll from "@/utils/useInfiniteScroll";

const WorkClient = () => {
  const {
    displayedItems: displayedProjects,
    isLoading,
    showMore,
    canShowMore,
  } = useInfiniteScroll({
    items: projects,
    itemsPerPage: 6,
  });

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
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              image={project.image}
              alt={project.alt}
              subtitle={project.subtitle}
              title={project.title}
              link={project.slug}
              skills={project.skills}
            />
          ))}
        </div>
        {canShowMore && (
          <button
            className={`py-3 px-6 rounded-3xl text-white font-semibold text-base leading-[18px] mx-auto max-w-fit shadow-lg/30 md:shadow-xl/30 transition-colors duration-200 ${
              isLoading ? "bg-gray-600 cursor-not-allowed" : "bg-black"
            }`}
            onClick={showMore}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkClient;
