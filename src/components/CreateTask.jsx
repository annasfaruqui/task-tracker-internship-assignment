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
      <label>Title:</label>
      <Input name="title" placeholder="Enter title name" />

      {/* Description */}
      <label>Description:</label>
      <Textarea placeholder="Enter task description..." />

      {/* Team */}
      <label>Team:</label>
      <Input name="team" />

      {/* Assignee */}
      <label>Assignee:</label>
      <Input name="assignee" />

      {/* Priority */}
      <label>Priority</label>
      <Select name="priority">
        <option>P0</option>
        <option>P1</option>
        <option>P2</option>
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
