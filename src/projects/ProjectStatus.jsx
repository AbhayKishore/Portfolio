const STATUS_CONFIG = {
  shipped: {
    label: "Shipped",
    icon: "bi-check-circle-fill",
  },

  "in-development": {
    label: "In development",
    icon: "bi-tools",
  },

  planned: {
    label: "Planned",
    icon: "bi-clock-fill",
  },
};

export default function ProjectStatus({
  status = "planned",
}) {
  const config =
    STATUS_CONFIG[status] ||
    STATUS_CONFIG.planned;

  return (
    <span
      className={`project-card__status project-card__status--${status}`}
      aria-label={`Project status: ${config.label}`}
    >
      <i
        className={`bi ${config.icon}`}
        aria-hidden="true"
      />

      {config.label}
    </span>
  );
}