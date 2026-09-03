import { useMemo, useState } from "react";

import {
  featuredProjects,
  projectFilters,
} from "../data/projects";

import ProjectCard from "../projects/ProjectCard";
import ProjectFilter from "../projects/ProjectFilter";

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] =
    useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return featuredProjects;
    }

    return featuredProjects.filter(
      (project) =>
        project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="reveal"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>

          <h2
            id="projects-title"
            className="section-title"
          >
            Featured Work
          </h2>
        </div>

        <p className="section-description">
          A selection of full-stack and
          AI-focused projects built to solve
          practical problems.
        </p>
      </div>

      <ProjectFilter
        filters={projectFilters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {filteredProjects.length > 0 ? (
        <div className="grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="projects-empty-state">
          <i
            className="bi bi-folder2-open"
            aria-hidden="true"
          />

          <h3>No projects found</h3>

          <p>
            There are currently no featured
            projects in this category.
          </p>
        </div>
      )}
    </section>
  );
}