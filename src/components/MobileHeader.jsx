import personal from "../data/personal";

export default function MobileHeader({
  isMenuOpen,
  onToggleMenu,
  onNavigate,
}) {
  const handleHomeClick = (event) => {
    event.preventDefault();

    if (onNavigate) {
      onNavigate("home");
      return;
    }

    document
      .getElementById("home")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <header className="mobile-header">
      <a
        href="#home"
        className="mobile-logo"
        onClick={handleHomeClick}
        aria-label="Go to homepage"
      >
        <div
          className="logo-avatar mobile-logo__avatar"
          aria-hidden="true"
        >
          {personal.initials}
        </div>

        <span className="mobile-logo__name">
          {personal.name}
        </span>
      </a>

      <div className="mobile-header__actions">
        <a
          href={personal.resume.path}
          download={personal.resume.filename}
          className="mobile-header__resume"
          aria-label="Download Abhay Kishore's résumé"
        >
          <i
            className="bi bi-download"
            aria-hidden="true"
          />

          <span>Resume</span>
        </a>

        <button
          type="button"
          className="hamburger-btn"
          onClick={onToggleMenu}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
        >
          <i
            className={`bi ${
              isMenuOpen
                ? "bi-x-lg"
                : "bi-list"
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
}