import Select from "../ui/Select";

function Sort({ sortBy, setSortBy }) {
  return (
    <div className="flex flex-col gap-2 min-[450px]:flex-row sm:items-center lg:gap-8">
      <p className="mr-2 font-semibold">Sort By:</p>
      <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option>Priority</option>
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
      </Select>
    </div>
  );
}

export default Sort;
