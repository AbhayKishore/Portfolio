import personal from "../data/personal";
import {
  shippedProjectCount,
} from "../data/projects";

export default function About() {
  return (
    <section
      id="about"
      className="about reveal"
      aria-labelledby="about-title"
    >
      {/* =====================================
          SECTION HEADING
          ===================================== */}

      <div className="section-heading">
        <div>
          <h2
            className="section-title"
            id="about-title"
          >
            About Me
          </h2>
        </div>

        <p className="section-description">
          A developer focused on practical
          software, intelligent systems and
          continuous learning.
        </p>
      </div>

      {/* =====================================
          ABOUT CONTENT
          ===================================== */}

      <div className="about__container">
        {/* ===================================
            LEFT — PORTRAIT
            =================================== */}

        <div className="about__visual">
          <div className="about__image-frame">
            <img
              src="/assets/AbhayKishore_Photo.jpg"
              alt="Abhay Kishore"
              className="about__img"
            />
          </div>

          <div className="about__focus-card">
            <span className="about__focus-label">
              Current focus
            </span>

            <h3>
              {
                personal.currentEducation
                  .degree
              }
            </h3>

            <p>
              {
                personal.currentEducation
                  .university
              }
            </p>
          </div>
          
        </div>

        {/* ===================================
            RIGHT — PROFILE CONTENT
            =================================== */}

        <div className="about__data">
          <div className="about__intro">
            <span className="about__role">
              {personal.role}
            </span>

            <h3 className="about__headline">
              Building useful digital products
              with full-stack engineering and
              applied AI.
            </h3>
          </div>

          <div className="about__info">
            {personal.about.map(
              (paragraph) => (
                <p
                  className="about__description"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
          {/* =================================
    CAREER FOCUS
    ================================= */}

<div className="about__focus">
  <span className="about__focus-heading">
    Career focus
  </span>

  <div className="about__focus-list">
    {personal.careerFocus.map((focus) => (
      <span
        className="about__focus-item"
        key={focus}
      >
        {focus}
      </span>
    ))}
  </div>
</div>

          {/* =================================
    PROFILE STATS
    ================================= */}

<div className="about__boxes">
  <article className="about__box">
    <i
      className="bi bi-code-square about__icon"
      aria-hidden="true"
    />

    <span className="about__title">
      Projects shipped
    </span>

    <strong className="about__stat">
      {shippedProjectCount}
    </strong>

    <span className="about__subtitle">
      Completed portfolio projects
    </span>
  </article>

  <article className="about__box">
    <i
      className="bi bi-geo-alt about__icon"
      aria-hidden="true"
    />

    <span className="about__title">
      Based in
    </span>

    <strong className="about__stat">
      Germany
    </strong>

    <span className="about__subtitle">
      Magdeburg, Saxony-Anhalt
    </span>
  </article>
</div>
        </div>
      </div>
    </section>
  );
}