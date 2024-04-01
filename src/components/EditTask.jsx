import { useState } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

function EditTask({ task }) {
  const [priority, setPriority] = useState("Priority");
  const [status, setStatus] = useState("");

  const divStyles = "flex flex-col gap-1";

  function handleSubmit() {}

  function handleCancel() {}

  return (
    <form className="flex flex-col justify-center gap-4">
      {/* Title */}
      <div className={divStyles}>
        <label for="title">Title: </label>
        <Input name="title" value={task.title} disabled={true} />
      </div>

      {/* Description */}
      <div className={divStyles}>
        <label for="description">Description: </label>
        <Textarea name="description" value={task.description} disabled={true} />
      </div>

      {/* Team */}
      <div className={divStyles}>
        <label for="team">Team: </label>
        <Input name="team" value={task.team} disabled={true} />
      </div>

      {/* Assignee */}
      <div className={divStyles}>
        <label for="assignee">Assignee: </label>
        <Input name="assignee" value={task.assignee} disabled={true} />
      </div>

      <div className="mt-4 flex items-center justify-between ">
        {/* Priority */}
        <div className="space-x-2">
          <label for="priority">Priority:</label>
          <Select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </Select>
        </div>

        {/* Status */}
        <div className="space-x-2">
          <label for="status">Status:</label>
          <Select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Select</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Deployed">Deployed</option>
            <option value="Deferred">Deferred</option>
          </Select>
        </div>
      </div>

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

export default EditTask;
