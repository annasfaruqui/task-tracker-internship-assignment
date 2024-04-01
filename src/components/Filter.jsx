import Input from "../ui/Input";
import Select from "../ui/Select";

function Filter({
  assignee,
  filterBy,
  date,
  setAssignee,
  setFilterBy,
  setDate,
}) {
  return (
    <div className="flex w-36 flex-col gap-2 min-[350px]:w-auto sm:w-auto md:flex-row lg:items-center lg:gap-8">
      <p className="mr-6 font-semibold md:mr-0">Filter By:</p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:gap-4">
        <Input
          type="text"
          placeholder="Assignee Name"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <Select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option>Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </Select>
        <Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="DD/MM/YY - DD/MM/YY"
        />
      </div>
    </div>
  );
}

export default Filter;
