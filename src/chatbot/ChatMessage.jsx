export default function ChatMessage({
  type = "bot",
  text,
}) {
  const isBot = type === "bot";

  return (
    <div
      className={`message ${type}`}
      role="listitem"
    >
      <div
        className={`chat-message__avatar ${
          isBot ? "bot" : "user"
        }`}
        aria-hidden="true"
      >
        <i
          className={`bi ${
            isBot
              ? "bi-robot"
              : "bi-person-fill"
          }`}
        />
      </div>

      <div className="chat-message__content">
        <span className="chat-message__sender">
          {isBot ? "Abhay's Assistant" : "You"}
        </span>

        <p>{text}</p>
      </div>
    </div>
  );
}