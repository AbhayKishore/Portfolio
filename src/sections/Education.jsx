import education from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="reveal"
      aria-labelledby="education-title"
    >
      <div className="section-heading">
        <div>

          <h2
            id="education-title"
            className="section-title"
          >
            Education
          </h2>
        </div>

        <p className="section-description">
          My academic path combines software development,
          computer science fundamentals, data engineering
          and applied artificial intelligence.
        </p>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <article
            key={item.id}
            className="timeline-item"
          >
            <div
              className="timeline-dot"
              aria-hidden="true"
            />

            <div className="timeline-card">
              <div className="timeline-card__top">
                <span className="timeline-card__date">
                  {item.displayDate}
                </span>

                <span
                  className={`timeline-card__status timeline-card__status--${item.status}`}
                >
                  {item.status === "ongoing"
                    ? "Ongoing"
                    : "Completed"}
                </span>
              </div>

              <h3 className="timeline-card__title">
                {item.degree}               
                {item.grade && (
                <div className="timeline-card__grade">
                  ({item.grade})
                </div>
              )}
              </h3>

              <p className="timeline-card__institution">
                {item.institution}
              </p>

              <p className="timeline-card__location">
                <i
                  className="bi bi-geo-alt"
                  aria-hidden="true"
                />

                {item.location}
              </p>

              {item.specialization && (
                <p className="timeline-card__specialization">
                  {item.specialization}
                </p>
              )}

              {item.details?.length > 0 && (
                <ul className="timeline-card__details">
                  {item.details.map((detail) => (
                    <li key={detail}>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}