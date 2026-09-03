import { useEffect } from "react";
import personal from "../data/personal";

export default function MobileMenu({
  isOpen,
  sections,
  activeSection,
  onClose,
  onNavigate,
}) {
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

    document.body.style.overflow = "hidden";
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
        });
    }

    onClose();
  };

  return (
    <div
      className={`mobile-menu-overlay ${
        isOpen ? "open" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      <div className="mobile-menu__top">
        <a
          href="#home"
          className="mobile-menu__brand"
          onClick={(event) =>
            handleNavigation(event, "home")
          }
        >
          <div
            className="mobile-menu__avatar"
            aria-hidden="true"
          >
            {personal.initials}
          </div>

          <div>
            <strong>{personal.name}</strong>
            <span>{personal.shortRole}</span>
          </div>
        </a>

        <button
          type="button"
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <i
            className="bi bi-x-lg"
            aria-hidden="true"
          />
        </button>
      </div>

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
              <span className="mobile-nav-link__icon">
                <i
                  className={`bi ${section.icon}`}
                  aria-hidden="true"
                />
              </span>

              <span>{section.label}</span>

              <i
                className="bi bi-arrow-right mobile-nav-link__arrow"
                aria-hidden="true"
              />
            </a>
          );
        })}
      </nav>

      <div className="mobile-menu__footer">
        <p>
          Open to internships, working-student
          roles and selected collaborations.
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

            Email me
          </a>

          <a
            href={personal.resume.path}
            download={personal.resume.filename}
            className="mobile-menu__resume"
          >
            <i
              className="bi bi-download"
              aria-hidden="true"
            />

            Résumé
          </a>
        </div>
      </div>
    </div>
  );
}