export default function ChatOptions({
  options,
  onSelect,
}) {
  if (!options?.length) {
    return null;
  }

  return (
    <div
      className="chat-options"
      role="group"
      aria-label="Assistant options"
    >
      {options.map((option) => (
        <button
          key={option.action}
          type="button"
          className="option-btn"
          onClick={() => onSelect(option)}
        >
          <span>{option.label}</span>

          <i
            className="bi bi-arrow-right"
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  );
}