import {
  useCallback,
  useState,
} from "react";

import "./styles/index.css";

import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import MobileMenu from "./components/MobileMenu";
import Chatbot from "./chatbot/Chatbot";
import HomePage from "./pages/HomePage";

import useActiveSection from "./hooks/useActiveSection";
import useScrollReveal from "./hooks/useScrollReveal";

const NAV_SECTIONS = [
  {
    id: "about",
    label: "About Me",
    icon: "bi-person",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "bi-code-square",
  },
  {
    id: "education",
    label: "Education",
    icon: "bi-mortarboard",
  },
  {
    id: "work",
    label: "Experience",
    icon: "bi-briefcase",
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: "bi-patch-check",
  },
  {
    id: "achievements",
    label: "Achievements",
    icon: "bi-trophy",
  },
  {
    id: "skills",
    label: "Skills",
    icon: "bi-cpu",
  },
  {
    id: "contact",
    label: "Contact",
    icon: "bi-envelope",
  },
];

const SECTION_IDS = [
  "home",
  ...NAV_SECTIONS.map(
    (section) => section.id
  ),
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [chatOpen, setChatOpen] =
    useState(false);

  const [
    requestedChatAction,
    setRequestedChatAction,
  ] = useState(null);

  const activeSection = useActiveSection(
    SECTION_IDS,
    {
      defaultSection: "home",
      offset: 300,
    }
  );

  /*
    The desktop sidebar is full-size ONLY
    while the Home section is active.

    Every other section uses the hidden /
    hover-reveal sidebar.
  */
  const sidebarCollapsed =
    activeSection !== "home";

  useScrollReveal();

  const scrollToSection = useCallback(
    (sectionId) => {
      const section =
        document.getElementById(sectionId);

      if (!section) {
        return;
      }

      const isMobile =
        window.innerWidth <= 768;

      const headerOffset = isMobile
        ? 72
        : 20;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    },
    []
  );

  const openMobileMenu =
    useCallback(() => {
      setIsMobileMenuOpen(true);
    }, []);

  const closeMobileMenu =
    useCallback(() => {
      setIsMobileMenuOpen(false);
    }, []);

  const toggleChat =
    useCallback(() => {
      setChatOpen(
        (currentValue) =>
          !currentValue
      );
    }, []);

  const closeChat =
    useCallback(() => {
      setChatOpen(false);
    }, []);

  const openServicesChat =
    useCallback(() => {
      setRequestedChatAction(
        "services"
      );

      setChatOpen(true);
    }, []);

  const clearRequestedChatAction =
    useCallback(() => {
      setRequestedChatAction(null);
    }, []);

  return (
    <>
      <MobileHeader
        onOpenMenu={openMobileMenu}
        onNavigate={scrollToSection}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        sections={NAV_SECTIONS}
        activeSection={activeSection}
        onClose={closeMobileMenu}
        onNavigate={scrollToSection}
      />

      <Sidebar
        sections={NAV_SECTIONS}
        activeSection={activeSection}
        collapsed={sidebarCollapsed}
        onNavigate={scrollToSection}
      />

      <HomePage
        sidebarCollapsed={
          sidebarCollapsed
        }
        onNavigate={scrollToSection}
        onOpenServices={
          openServicesChat
        }
      />

      <Chatbot
        isOpen={chatOpen}
        onToggle={toggleChat}
        onClose={closeChat}
        onNavigate={scrollToSection}
        requestedAction={
          requestedChatAction
        }
        onRequestedActionHandled={
          clearRequestedChatAction
        }
      />
    </>
  );
}