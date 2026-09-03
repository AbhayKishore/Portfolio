import experience from "../data/experience";

export default function Experience() {
  return (
    <section
      id="work"
      className="reveal"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>

          <h2
            id="experience-title"
            className="section-title"
          >
            Experience
          </h2>
        </div>

        <p className="section-description">
          Practical experience across web development,
          artificial intelligence and structured software
          development workflows.
        </p>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article
            key={item.id}
            className="timeline-item"
          >
            <div
              className="timeline-dot"
              aria-hidden="true"
            />

            <div className="timeline-card experience-card">
              <div className="timeline-card__top">
                <span className="timeline-card__date">
                  {item.displayDate}
                </span>

                <span className="experience-card__type">
                  {item.type}
                </span>
              </div>

              <h3 className="timeline-card__title">
                {item.role}
              </h3>

              <p className="timeline-card__institution">
                {item.company}
              </p>

              <p className="timeline-card__location">
                <i
                  className="bi bi-geo-alt"
                  aria-hidden="true"
                />

                {item.location}
              </p>

              {item.summary && (
                <p className="experience-card__summary">
                  {item.summary}
                </p>
              )}

              {item.responsibilities?.length > 0 && (
                <ul className="timeline-card__details">
                  {item.responsibilities.map(
                    (responsibility) => (
                      <li key={responsibility}>
                        {responsibility}
                      </li>
                    )
                  )}
                </ul>
              )}

              {item.technologies?.length > 0 && (
                <div className="experience-card__technologies">
                  {item.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="tech-badge"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}