import achievements from "../data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="reveal"
      aria-labelledby="achievements-title"
    >
      {/* =====================================
          SECTION HEADING
          ===================================== */}

      <div className="section-heading">
        <div>
          <h2
            className="section-title"
            id="achievements-title"
          >
            Achievements
          </h2>
        </div>

        <p className="section-description">
          Academic milestones, presentations
          and experiences that have shaped my
          growth so far.
        </p>
      </div>

      {/* =====================================
          ACHIEVEMENT CARDS
          ===================================== */}

      <div className="achievements-wrapper">
        {achievements.map((item) => (
          <article
            className="achievement-card"
            key={`${item.title}-${item.year}`}
          >
            <div
              className="achievement-card__icon"
              aria-hidden="true"
            >
              
            </div>

            <div className="achievement-card__content">
              <div className="achievement-card__meta">
                {item.category && (
                  <span className="achievement-card__category">
                    {item.category}
                  </span>
                )}

                {item.year && (
                  <span className="achievement-card__year">
                    {item.year}
                  </span>
                )}
              </div>

              <h3 className="achievement-card__title">
                {item.title}
              </h3>

              {item.description && (
                <p className="achievement-card__description">
                  {item.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}