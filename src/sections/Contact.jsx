import personal from "../data/personal";

export default function Contact() {
  const {
    contact,
    socialLinks,
    availability,
  } = personal;

  return (
    <section
      id="contact"
      className="reveal"
      aria-labelledby="contact-title"
    >
      <div className="section-heading">
        <div>
          <h2
            id="contact-title"
            className="section-title"
          >
            Get in Touch
          </h2>
        </div>

        <p className="section-description">
          Open to internships, working-student roles,
          entry-level opportunities and selected
          freelance collaborations.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-intro-card">
          <span className="contact-status">
            <span
              className="contact-status__dot"
              aria-hidden="true"
            />

            {availability.label}
          </span>

          <h3>
            Have a role, project or collaboration
            in mind?
          </h3>

          <p>
            I am interested in opportunities where I
            can contribute to software development,
            backend engineering, applied AI and
            data-focused products.
          </p>
        </div>

        <div className="contact-details">
          <a
            href={`mailto:${contact.email}`}
            className="contact-detail-card"
          >
            <div className="contact-detail-card__icon">
              <i
                className="bi bi-envelope-at"
                aria-hidden="true"
              />
            </div>

            <div>
              <span className="contact-detail-card__label">
                Email
              </span>

              <strong>
                {contact.email}
              </strong>
            </div>

            <i
              className="bi bi-arrow-up-right contact-detail-card__arrow"
              aria-hidden="true"
            />
          </a>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="contact-detail-card"
          >
            <div className="contact-detail-card__icon">
              <i
                className="bi bi-whatsapp"
                aria-hidden="true"
              />
            </div>

            <div>
              <span className="contact-detail-card__label">
                WhatsApp
              </span>

              <strong>
                Message me on WhatsApp
              </strong>
            </div>

            <i
              className="bi bi-arrow-up-right contact-detail-card__arrow"
              aria-hidden="true"
            />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-detail-card"
          >
            <div className="contact-detail-card__icon">
              <i
                className="bi bi-linkedin"
                aria-hidden="true"
              />
            </div>

            <div>
              <span className="contact-detail-card__label">
                LinkedIn
              </span>

              <strong>
                View professional profile
              </strong>
            </div>

            <i
              className="bi bi-arrow-up-right contact-detail-card__arrow"
              aria-hidden="true"
            />
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="contact-detail-card"
          >
            <div className="contact-detail-card__icon">
              <i
                className="bi bi-github"
                aria-hidden="true"
              />
            </div>

            <div>
              <span className="contact-detail-card__label">
                GitHub
              </span>

              <strong>
                View projects and source code
              </strong>
            </div>

            <i
              className="bi bi-arrow-up-right contact-detail-card__arrow"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}