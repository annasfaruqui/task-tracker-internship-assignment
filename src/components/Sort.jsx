import Select from "../ui/Select";

function Sort({ sortBy, setSortBy }) {
  return (
    <div className="flex flex-col gap-2 min-[450px]:flex-row sm:items-center lg:gap-8">
      <p className="mr-2 font-semibold">Sort By:</p>
      <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option>Priority</option>
        <option value="priority-asc">Priority(ascending)</option>
        <option value="priority-desc">Priority(descending)</option>
        <option value="startDate-asc">Start Date(earlier first)</option>
        <option value="startDate-desc">Start Date(recent first)</option>
        <option value="endDate-asc">End Date(earlier first)</option>
        <option value="endDate-desc">End Date(recent first)</option>
      </Select>
    </div>
  );
}

export default Sort;
