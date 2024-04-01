import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";

function CreateTask() {
  function handleSubmit() {}

  function handleCancel() {}

  return (
    <form className="grid grid-cols-[1fr_4fr] gap-x-2 gap-y-4">
      {/* Title */}
      <label for="description">Title:</label>
      <Input id="title" name="title" placeholder="Enter title name" />

      {/* Description */}
      <label for="description">Description:</label>
      <Textarea id="description" placeholder="Enter task description..." />

      {/* Team */}
      <label for="team">Team:</label>
      <Input id="team" name="team" placeholder="Enter team name" />

      {/* Assignee */}
      <label for="assignee">Assignee:</label>
      <Input id="assignee" name="assignee" placeholder="Enter assignee name" />

      {/* Priority */}
      <label for="priority">Priority</label>
      <Select id="priority" name="priority">
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
      </Select>

      <div className="col-start-2 mt-6 flex w-full items-center justify-center gap-3 ">
        <Button type="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default CreateTask;
