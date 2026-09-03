import certifications from "../data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="reveal"
      aria-labelledby="certifications-title"
    >
      {/* =====================================
          SECTION HEADING
          ===================================== */}

      <div className="section-heading">
        <div>
          <h2
            className="section-title"
            id="certifications-title"
          >
            Certifications & Workshops
          </h2>
        </div>

        <p className="section-description">
          Selected certifications and workshops
          that support my technical and
          professional development.
        </p>
      </div>

      {/* =====================================
          CERTIFICATION CARDS
          ===================================== */}

      <div className="cert-grid">
        {certifications.map((item) => (
          <article
            className="cert-card"
            key={`${item.title}-${item.issuer}`}
          >
            <div className="cert-card__top">
              <div className="cert-card__meta">
                {item.type && (
                  <span className="cert-card__type">
                    {item.type}
                  </span>
                )}

                {item.year && (
                  <span className="cert-card__year">
                    {item.year}
                  </span>
                )}
              </div>
            </div>

            <h3 className="cert-card__title">
              {item.title}
            </h3>

            <p className="cert-card__issuer">
              {item.issuer}
            </p>

            {item.description && (
              <p className="cert-card__description">
                {item.description}
              </p>
            )}

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="cert-card__link"
              >
                <span>View credential</span>

                <i
                  className="bi bi-arrow-up-right"
                  aria-hidden="true"
                />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}