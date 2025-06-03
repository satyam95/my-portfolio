"use client";
import ProjectCard from "@/components/ProjectCard";
import { PlaygroundProjects } from "@/data/playgrounds";
import React, { useEffect, useState, useCallback } from "react";

const PlaygroundClient = () => {
  const [displayedProjects, setDisplayedProjects] = useState(
    PlaygroundProjects.slice(0, 6)
  );
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const projectsPerPage = 6;

  // Memoize handleScroll to prevent unnecessary re-creation
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 300
    ) {
      if (displayedProjects.length >= PlaygroundProjects.length || isLoading)
        return;

      setIsLoading(true);
      setTimeout(() => {
        const nextProjects = PlaygroundProjects.slice(
          0,
          (page + 1) * projectsPerPage
        );
        setDisplayedProjects(nextProjects);
        setPage(page + 1);
        setIsLoading(false);
      }, 500);
    }
  }, [page, displayedProjects, isLoading]); // Dependencies for handleScroll

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, [handleScroll]); // Include handleScroll in the dependency array

  return (
    <div className="pb-16 pt-6 md:pb-20 md:pt-10 px-4 md:px-8 lg:px-0">
      <div className="flex flex-col gap-12 md:gap-15">
        <div className="flex flex-col gap-1 md:gap-2.5">
          <h2 className="text-4xl md:text-5xl font-bold">
            Miscellaneous projects
          </h2>
          <p className="text-[#757575] text-xl md:text-2xl font-medium">
            Here&apos;s some of my little silly projects, sometimes I design out
            of fun.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-center lg:justify-between gap-12 lg:gap-5 lg:gap-y-5">
          {displayedProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              image={project.image}
              alt={project.alt}
              subtitle={project.subtitle}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
        {displayedProjects.length < PlaygroundProjects.length && (
          <button
            className={`py-3 px-6 rounded-3xl text-white font-semibold text-base leading-[18px] mx-auto max-w-fit shadow-lg/30 md:shadow-xl/30 transition-colors duration-200 ${
              isLoading ? "bg-gray-600 cursor-not-allowed" : "bg-black"
            }`}
            onClick={() => {
              if (!isLoading) {
                setIsLoading(true);
                setTimeout(() => {
                  const nextProjects = PlaygroundProjects.slice(
                    0,
                    (page + 1) * projectsPerPage
                  );
                  setDisplayedProjects(nextProjects);
                  setPage(page + 1);
                  setIsLoading(false);
                }, 500);
              }
            }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PlaygroundClient;
