export default function ProjectFilter({
  filters,
  activeFilter,
  onFilterChange,
}) {
  return (
    <div
      className="work-filters"
      role="group"
      aria-label="Filter projects by category"
    >
      {filters.map((filter) => {
        const isActive =
          activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            className={`work-item ${
              isActive ? "active-work" : ""
            }`}
            onClick={() =>
              onFilterChange(filter.value)
            }
            aria-pressed={isActive}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}