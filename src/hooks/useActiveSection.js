import { useEffect, useState } from "react";

export default function useActiveSection(
  sectionIds = [],
  options = {}
) {
  const {
    defaultSection = "home",
    offset = 260,
  } = options;

  const [activeSection, setActiveSection] =
    useState(defaultSection);

  useEffect(() => {
    if (!sectionIds.length) {
      return;
    }

    const updateActiveSection = () => {
      let currentSection = defaultSection;

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return;
        }

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - offset) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, [
    sectionIds,
    defaultSection,
    offset,
  ]);

  return activeSection;
}