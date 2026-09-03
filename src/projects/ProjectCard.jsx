import ProjectStatus from "./ProjectStatus";
export default function ProjectCard({ project }) {
  const {
    title,
    image,
    shortDescription,
    technologies,
    github,
    liveDemo,
    year,
    role,
    status,
  } = project;

  const primaryLink = liveDemo || github;

  return (
    <article className="project-card">
      <a
        href={primaryLink}
        target="_blank"
        rel="noreferrer"
        className="project-card__link"
        aria-label={`Open ${title}`}
      >
        <div className="card-thumb">
          {image ? (
            <img
              src={image}
              alt={`${title} project preview`}
              loading="lazy"
            />
          ) : (
            <div
              className="project-card__placeholder"
              aria-hidden="true"
            >
              <i className="bi bi-code-square" />
            </div>
          )}

          <div className="project-card__overlay">
            <span>
              View project
              <i
                className="bi bi-arrow-up-right"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </a>

      <div className="card-body">
        <div className="project-card__meta">
          <span className="project-card__year">
            {year}
          </span>

          <ProjectStatus status={status} />
        </div>

        <h3 className="project-card__title">
          {title}
        </h3>

        {role && (
          <p className="project-card__role">
            {role}
          </p>
        )}

        <p className="project-card__description">
          {shortDescription}
        </p>

        <div className="tech-badges">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="tech-badge"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project-card__action"
              aria-label={`View ${title} source code on GitHub`}
            >
              <i
                className="bi bi-github"
                aria-hidden="true"
              />

              Source
            </a>
          )}

          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noreferrer"
              className="project-card__action"
              aria-label={`Open the live demo of ${title}`}
            >
              <i
                className="bi bi-box-arrow-up-right"
                aria-hidden="true"
              />

              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}