import personal from "../data/personal";

export default function Footer({
  onNavigate,
  onOpenServices,
}) {
  const {
    name,
    role,
    contact,
    socialLinks,
  } = personal;

  const currentYear = new Date().getFullYear();

  const handleNavigation = (
    event,
    sectionId
  ) => {
    event.preventDefault();

    if (onNavigate) {
      onNavigate(sectionId);
      return;
    }

    const section =
      document.getElementById(sectionId);

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleServicesClick = (event) => {
    event.preventDefault();

    if (onOpenServices) {
      onOpenServices();
      return;
    }

    handleNavigation(event, "skills");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a
            href="#home"
            className="footer-brand__identity"
            onClick={(event) =>
              handleNavigation(event, "home")
            }
          >
            <div
              className="footer-brand__avatar"
              aria-hidden="true"
            >
              {personal.initials}
            </div>

            <div>
              <h2>{name}</h2>

              <p>{role}</p>
            </div>
          </a>

          <p className="footer-brand__description">
            Building practical full-stack and
            AI-powered digital products.
          </p>

          <div className="footer-location">
            <i
              className="bi bi-geo-alt"
              aria-hidden="true"
            />

            Based in {contact.location}
          </div>
        </div>

        <div className="footer-navigation">
          <div className="footer-column">
            <h3>Explore</h3>

            <nav
              className="footer-links"
              aria-label="Footer navigation"
            >
              <a
                href="#about"
                onClick={(event) =>
                  handleNavigation(
                    event,
                    "about"
                  )
                }
              >
                About
              </a>

              <a
                href="#projects"
                onClick={(event) =>
                  handleNavigation(
                    event,
                    "projects"
                  )
                }
              >
                Projects
              </a>

              <a
                href="#experience"
                onClick={(event) =>
                  handleNavigation(
                    event,
                    "work"
                  )
                }
              >
                Experience
              </a>

              <a
                href="#skills"
                onClick={(event) =>
                  handleNavigation(
                    event,
                    "skills"
                  )
                }
              >
                Skills
              </a>
            </nav>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>

            <nav
              className="footer-links"
              aria-label="Contact links"
            >
              <a
                href={`mailto:${contact.email}`}
              >
                Email
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-socials">
          <a
            href={`mailto:${contact.email}`}
            aria-label="Send Abhay an email"
          >
            <i
              className="bi bi-envelope"
              aria-hidden="true"
            />
          </a>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact Abhay on WhatsApp"
          >
            <i
              className="bi bi-whatsapp"
              aria-hidden="true"
            />
          </a>
                    <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <i
              className="bi bi-linkedin"
              aria-hidden="true"
            />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <i
              className="bi bi-github"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} {name}. All rights
          reserved.
        </p>

        <button
          type="button"
          className="footer-back-to-top"
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          Back to top

          <i
            className="bi bi-arrow-up"
            aria-hidden="true"
          />
        </button>
      </div>
    </footer>
  );
}