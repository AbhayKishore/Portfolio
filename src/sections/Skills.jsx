import { useState } from "react";

import skills, {
} from "../data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState(skills[0]?.id ?? null);

  const selectedCategory = skills.find(
    (category) => category.id === activeCategory
  );

  return (
    <section
      id="skills"
      className="reveal"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <div>

          <h2
            id="skills-title"
            className="section-title"
          >
            Skills & Technologies
          </h2>
        </div>

        <p className="section-description">
          A practical technology stack covering
          full-stack development, applied AI, data
          processing and core computer-science
          fundamentals.
        </p>
      </div>


      <div className="skills-container">
        <div
          className="skills-tabs"
          role="tablist"
          aria-label="Skill categories"
        >
          {skills.map((category) => {
            const isActive =
              category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`skills-panel-${category.id}`}
                id={`skills-tab-${category.id}`}
                className={`skills-header ${
                  isActive ? "active" : ""
                }`}
                onClick={() =>
                  setActiveCategory(category.id)
                }
              >
                <i
                  className={`bi ${category.icon} skills-icon-large`}
                  aria-hidden="true"
                />

                <div className="skills-header-titles">
                  <h3 className="skills-title">
                    {category.category}
                  </h3>

                  <span className="skills-subtitle">
                    {category.items.length} technologies
                  </span>
                </div>

                <i
                  className="bi bi-chevron-right skills-arrow"
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        {selectedCategory && (
          <div
            id={`skills-panel-${selectedCategory.id}`}
            className="skills-content-panel"
            role="tabpanel"
            aria-labelledby={`skills-tab-${selectedCategory.id}`}
          >
            <div className="skills-panel__header">
              <div className="skills-panel__icon">
                <i
                  className={`bi ${selectedCategory.icon}`}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3>
                  {selectedCategory.category}
                </h3>

                <p>
                  {selectedCategory.description}
                </p>
              </div>
            </div>

            <div className="skills-grid">
              {selectedCategory.items.map(
                (skill) => (
                  <div
                    key={skill}
                    className="skill-chip"
                  >
                    <i
                      className="bi bi-check2"
                      aria-hidden="true"
                    />

                    <span>{skill}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}