import personal from "../data/personal";

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        {/* =====================================
            LEFT — INTRODUCTION
            ===================================== */}

        <div className="hero-text">
          <p className="hero-eyebrow">
            Hello, I am
          </p>

          <h1 id="hero-title">
            <span className="text-gradient">
              {personal.name}
            </span>
          </h1>

          <p className="hero-role">
            {personal.role}
          </p>

          <p className="lead">
            {personal.summary}
          </p>

          {/* =====================================
              ACTIONS
              ===================================== */}

          <div className="hero-actions">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hero-primary-action"
              aria-label="Open Abhay's GitHub profile"
            >
              <i
                className="bi bi-github"
                aria-hidden="true"
              />

              <span>GitHub</span>
            </a>

            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-action"
              aria-label="Open Abhay's LinkedIn profile"
            >
              <i
                className="bi bi-linkedin"
                aria-hidden="true"
              />

              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* =====================================
            RIGHT — DEVELOPER VISUAL
            ===================================== */}

        <div
          className="hero-img-container"
          aria-hidden="true"
        >
          <div className="hero-blob blob-1" />
          <div className="hero-blob blob-2" />

          {/* DATABASE */}

          <div className="floating-badge badge-1">
            <i className="bi bi-database-fill" />
          </div>

          {/* SECURITY */}

          <div className="floating-badge badge-2">
            <i className="bi bi-shield-lock-fill" />
          </div>

          {/* CODE */}

          <div className="floating-badge badge-3">
            <i className="bi bi-code-slash" />
          </div>

          {/* =====================================
              LAPTOP
              ===================================== */}

          <div className="laptop-container">
            <div className="laptop-screen">
              <div className="code-window">
                <div className="window-header">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>

                <div className="code-lines">
                  <span className="line line-1" />
                  <span className="line line-2" />
                  <span className="line line-3" />
                  <span className="line line-4" />
                </div>
              </div>
            </div>

            <div className="laptop-base" />
          </div>
        </div>
      </div>
    </section>
  );
}