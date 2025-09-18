type FilterDropdownTogglerProps = {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FilterDropdownToggler({
  showDropdown,
  setShowDropdown,
}: FilterDropdownTogglerProps) {
  return (
    <button
      id="filterDropdown"
      className={`filterDropdown tf-btn-filter ${showDropdown ? "active" : ""}`}
      onClick={() => setShowDropdown((pre) => !pre)}
    >
      <span className={`icon icon-${showDropdown ? "close" : "filter"}`} />
      <span className="text">Filters</span>
    </button>
  );
}
