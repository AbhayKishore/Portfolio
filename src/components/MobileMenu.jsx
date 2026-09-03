import { useEffect } from "react";
import personal from "../data/personal";

export default function MobileMenu({
  isOpen,
  sections,
  activeSection,
  onClose,
  onNavigate,
}) {
  /* =======================================
     LOCK BODY + ESCAPE
     ======================================= */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, onClose]);

  /* =======================================
     NAVIGATION
     ======================================= */

  const handleNavigation = (
    event,
    sectionId
  ) => {
    event.preventDefault();

    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }

    onClose();
  };

  /* =======================================
     COMPONENT
     ======================================= */

  return (
   <div
  className={`mobile-menu-overlay ${
    isOpen ? "open" : ""
  }`}
  inert={!isOpen ? "" : undefined}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      {/* ===================================
          NAVIGATION
          =================================== */}

      <nav
        className="mobile-nav-list"
        aria-label="Portfolio sections"
      >
        {sections.map((section) => {
          const isActive =
            activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`mobile-nav-link ${
                isActive ? "active" : ""
              }`}
              onClick={(event) =>
                handleNavigation(
                  event,
                  section.id
                )
              }
              aria-current={
                isActive
                  ? "location"
                  : undefined
              }
            >
              <span
                className="mobile-nav-link__icon"
                aria-hidden="true"
              >
                <i
                  className={`bi ${section.icon}`}
                />
              </span>

              <span className="mobile-nav-link__label">
                {section.label}
              </span>

              <i
                className="bi bi-arrow-right mobile-nav-link__arrow"
                aria-hidden="true"
              />
            </a>
          );
        })}
      </nav>

      {/* ===================================
          FOOTER
          =================================== */}

      <div className="mobile-menu__footer">
        <p>
          Open to internships,
          working-student roles and selected
          collaborations.
        </p>

        <div className="mobile-menu__actions">
          <a
            href={`mailto:${personal.contact.email}`}
            className="mobile-menu__contact"
          >
            <i
              className="bi bi-envelope"
              aria-hidden="true"
            />

            <span>Email me</span>
          </a>

          <a
            href={personal.resume.path}
            download={
              personal.resume.filename
            }
            className="mobile-menu__resume"
          >
            <i
              className="bi bi-download"
              aria-hidden="true"
            />

            <span>Résumé</span>
          </a>
        </div>
      </div>
    </div>
  );
}