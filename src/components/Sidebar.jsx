import personal from "../data/personal";

export default function Sidebar({
  sections,
  activeSection,
  collapsed,
  onNavigate,
}) {
  const handleNavigation = (
    event,
    sectionId
  ) => {
    event.preventDefault();

    if (onNavigate) {
      onNavigate(sectionId);
      return;
    }

    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <aside
      className={`sidebar ${
        collapsed ? "collapsed" : ""
      }`}
      aria-label="Primary navigation"
    >
      <div className="sidebar-inner">
        <a
          href="#home"
          className="logo"
          onClick={(event) =>
            handleNavigation(event, "home")
          }
          aria-label="Go to homepage"
        >
          <div
            className="logo-avatar"
            aria-hidden="true"
          >
            {personal.initials}
          </div>

          <span className="logo-text">
            {personal.name}
          </span>
        </a>

        <nav
          className="sidebar-nav"
          aria-label="Portfolio sections"
        >
          {sections.map((section) => {
            const isActive =
              activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`sidebar-link ${
                  isActive ? "active" : ""
                }`}
                onClick={(event) =>
                  handleNavigation(
                    event,
                    section.id
                  )
                }
                title={section.label}
                aria-current={
                  isActive
                    ? "location"
                    : undefined
                }
              >
                <i
                  className={`bi ${section.icon} sidebar-icon`}
                  aria-hidden="true"
                />

                <span className="sidebar-label">
                  {section.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="sidebar-cta">
          <a
            href={personal.resume.path}
            download={
              personal.resume.filename
            }
            className="contact-btn"
            aria-label="Download Abhay Kishore's résumé"
          >
            <i
              className="bi bi-download"
              aria-hidden="true"
            />

            <span className="cta-label">
              Resume
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}