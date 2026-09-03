import {
  useEffect,
  useRef,
  useState,
} from "react";

import personal from "../data/personal";
import ChatMessage from "./ChatMessage";
import ChatOptions from "./ChatOptions";

/* =========================================
   PROFESSIONAL QUICK QUESTIONS
   ========================================= */

const CHAT_OPTIONS = [
  {
    label: "What roles is Abhay looking for?",
    action: "roles",
    icon: "bi-briefcase",
  },
  {
    label: "Show me his key projects",
    action: "projects",
    icon: "bi-code-square",
  },
  {
    label: "What are his strongest skills?",
    action: "skills",
    icon: "bi-lightning-charge",
  },
  {
    label: "Summarise his experience",
    action: "experience",
    icon: "bi-person-workspace",
  },
  {
    label: "Why should I consider Abhay?",
    action: "why-abhay",
    icon: "bi-stars",
  },
  {
    label: "What is his education?",
    action: "education",
    icon: "bi-mortarboard",
  },
  {
    label: "How can I contact him?",
    action: "contact",
    icon: "bi-envelope",
  },
  {
    label: "View his résumé",
    action: "resume",
    icon: "bi-file-earmark-person",
  },
];

/* =========================================
   INITIAL MESSAGE
   ========================================= */

const INITIAL_MESSAGE = {
  id: "initial-message",
  type: "bot",
  text:
    "Hi, I’m Abhay’s portfolio assistant. I can give you a quick overview of his experience, projects, technical skills and current opportunities.",
};

/* =========================================
   CHATBOT
   ========================================= */

export default function Chatbot({
  isOpen,
  onToggle,
  onClose,
  onNavigate,
  requestedAction = null,
  onRequestedActionHandled,
}) {
  const [messages, setMessages] =
    useState([INITIAL_MESSAGE]);

  const [isResponding, setIsResponding] =
    useState(false);

  const chatEndRef = useRef(null);
  const responseTimerRef = useRef(null);

  /* =======================================
     NAVIGATION
     ======================================= */

  const scrollToSection = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
      return;
    }

    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* =======================================
     RESUME
     ======================================= */

  const downloadResume = () => {
    const link =
      document.createElement("a");

    link.href =
      personal.resume.path;

    link.download =
      personal.resume.filename;

    document.body.appendChild(link);

    link.click();

    link.remove();
  };

  /* =======================================
     BOT RESPONSES
     ======================================= */

  const getBotResponse = (action) => {
    switch (action) {
      case "roles":
        return (
          "Abhay is currently interested in internships, " +
          "working-student positions and entry-level opportunities " +
          "in full-stack development, backend engineering, " +
          "applied AI and data-focused software development."
        );

      case "projects":
        scrollToSection("projects");

        return (
          "Two of Abhay’s featured projects are FitConnect, " +
          "a full-stack gym-management platform, and an AI Resume " +
          "Evaluator that uses Google Gemini to analyse résumés " +
          "and provide structured feedback."
        );

      case "skills":
        scrollToSection("skills");

        return (
          "Abhay’s strongest technical areas are Python, Django, " +
          "Flask, React, JavaScript, MySQL, REST APIs and Git. " +
          "He also works with Pandas, data-processing workflows, " +
          "generative AI and Google Gemini."
        );

      case "experience":
        scrollToSection("work");

        return (
          "Abhay has practical internship experience in both " +
          "web development and artificial intelligence. His work " +
          "has included backend development, database-driven " +
          "applications, data processing and machine-learning workflows."
        );

      case "education":
        scrollToSection("education");

        return (
          `Abhay is currently pursuing an M.Sc. in Data and ` +
          `Knowledge Engineering at ${personal.currentEducation.university}. ` +
          "He previously completed a Bachelor of Computer Applications."
        );

      case "why-abhay":
        return (
          "Abhay combines practical software-development experience " +
          "with applied AI and data skills. He has built complete " +
          "projects, completed technical internships and is continuing " +
          "to strengthen his engineering foundations through his " +
          "master’s studies in Germany."
        );

      case "contact":
        scrollToSection("contact");

        return (
          `You can reach Abhay at ${personal.contact.email}. ` +
          `He is currently based in ${personal.contact.location}.`
        );

      case "resume":
        downloadResume();

        return (
          "Abhay’s résumé is ready. The download should begin automatically."
        );

      default:
        return (
          `You can contact Abhay directly at ` +
          `${personal.contact.email}.`
        );
    }
  };

  /* =======================================
     OPTION SELECTION
     ======================================= */

  const handleOptionSelect = (option) => {
    if (isResponding) {
      return;
    }

    const userMessage = {
      id: `user-${Date.now()}`,
      type: "user",
      text: option.label,
    };

    setMessages(
      (currentMessages) => [
        ...currentMessages,
        userMessage,
      ]
    );

    setIsResponding(true);

    /*
     * Short delay keeps the interaction
     * natural without feeling artificially slow.
     */

    responseTimerRef.current =
      window.setTimeout(() => {
        const response =
          getBotResponse(option.action);

        const botMessage = {
          id: `bot-${Date.now()}`,
          type: "bot",
          text: response,
        };

        setMessages(
          (currentMessages) => [
            ...currentMessages,
            botMessage,
          ]
        );

        setIsResponding(false);
      }, 300);
  };

  /* =======================================
     RESET CONVERSATION
     ======================================= */

  const resetConversation = () => {
    if (responseTimerRef.current) {
      window.clearTimeout(
        responseTimerRef.current
      );
    }

    setIsResponding(false);

    setMessages([
      INITIAL_MESSAGE,
    ]);
  };

  /* =======================================
     AUTO SCROLL
     ======================================= */

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [
    messages,
    isOpen,
    isResponding,
  ]);

  /* =======================================
     EXTERNAL REQUESTED ACTION
     ======================================= */

  useEffect(() => {
    if (
      !isOpen ||
      !requestedAction ||
      isResponding
    ) {
      return;
    }

    const matchingOption =
      CHAT_OPTIONS.find(
        (option) =>
          option.action ===
          requestedAction
      );

    if (matchingOption) {
      handleOptionSelect(
        matchingOption
      );
    }

    onRequestedActionHandled?.();
  }, [
    isOpen,
    requestedAction,
    isResponding,
    onRequestedActionHandled,
  ]);

  /* =======================================
     ESCAPE KEY
     ======================================= */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [
    isOpen,
    onClose,
  ]);

  /* =======================================
     CLEANUP TIMER
     ======================================= */

  useEffect(() => {
    return () => {
      if (
        responseTimerRef.current
      ) {
        window.clearTimeout(
          responseTimerRef.current
        );
      }
    };
  }, []);

  /* =======================================
     COMPONENT
     ======================================= */

  return (
    <>
      {isOpen && (
        <aside
          className="chat-window"
          aria-label="Abhay Kishore portfolio assistant"
        >
          {/* ===============================
              HEADER
              =============================== */}

          <header className="chat-header">
            <div className="chat-header__identity">
              <div
                className="chat-header__icon"
                aria-hidden="true"
              >
                <i className="bi bi-chat" />
              </div>

              <div className="chat-header__text">
                <strong>
                  Portfolio Assistant
                </strong>

                <span>
                  Quick answers about Abhay
                </span>
              </div>
            </div>

            <div className="chat-header__actions">
              <button
                type="button"
                className="chat-reset-btn"
                onClick={
                  resetConversation
                }
                aria-label="Reset conversation"
                title="Start over"
              >
                <i
                  className="bi bi-arrow-counterclockwise"
                  aria-hidden="true"
                />
              </button>

            </div>
          </header>

          {/* ===============================
              CONVERSATION
              =============================== */}

          <div
            className="chat-body"
            role="list"
            aria-live="polite"
          >
            {messages.map(
              (message) => (
                <ChatMessage
                  key={message.id}
                  type={message.type}
                  text={message.text}
                />
              )
            )}

            {isResponding && (
              <div
                className="chat-typing"
                aria-label="Portfolio assistant is responding"
              >
                <span />
                <span />
                <span />
              </div>
            )}

            <div
              ref={chatEndRef}
            />
          </div>

          {/* ===============================
              QUICK QUESTIONS
              =============================== */}

          <ChatOptions
            options={CHAT_OPTIONS}
            onSelect={
              handleOptionSelect
            }
            disabled={
              isResponding
            }
          />
        </aside>
      )}

      {/* ===================================
          FLOATING BUTTON
          =================================== */}

      <button
        type="button"
        className={`floating-bubble ${
          isOpen
            ? "floating-bubble--open"
            : ""
        }`}
        onClick={onToggle}
        title={
          isOpen
            ? "Close assistant"
            : "Ask about Abhay"
        }
        aria-label={
          isOpen
            ? "Close portfolio assistant"
            : "Open portfolio assistant"
        }
        aria-expanded={isOpen}
      >
        <i
          className={`bi ${
            isOpen
              ? "bi-x-lg"
              : "bi-chat"
          }`}
          aria-hidden="true"
        />
      </button>
    </>
  );
}