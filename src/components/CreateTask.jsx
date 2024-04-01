import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import { useTasks } from "../contexts/TasksContext";
import { useState } from "react";

function CreateTask({ onCloseModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [team, setTeam] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("P0");

  const { dispatch } = useTasks();

  function handleSubmit() {
    const newTask = {
      id: Date.now(),
      title,
      description,
      team,
      assignee,
      priority,
      status: "Pending",
      startDate: "today",
      endDate: "today",
    };

    dispatch({ type: "tasks/createTask", payload: newTask });
    onCloseModal?.();
  }

  return (
    <form className="grid grid-cols-[1fr_4fr] items-center gap-x-4 gap-y-4">
      {/* Title */}
      <label htmlFor="title">Title:</label>
      <Input
        id="title"
        name="title"
        placeholder="Enter title name"
        required={true}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Description */}
      <label htmlFor="description">Description:</label>
      <Textarea
        id="description"
        name="description"
        placeholder="Enter task description..."
        required={true}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Team */}
      <label htmlFor="team">Team:</label>
      <Input
        id="team"
        name="team"
        placeholder="Enter team name"
        required={true}
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />

      {/* Assignee */}
      <label htmlFor="assignee">Assignee:</label>
      <Input
        id="assignee"
        name="assignee"
        placeholder="Enter assignee name"
        required={true}
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
      />

      {/* Priority */}
      <label htmlFor="priority">Priority</label>
      <Select
        id="priority"
        name="priority"
        required={true}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
      </Select>

      <div className="col-start-2 mt-6 flex w-full items-center justify-end gap-2">
        <Button type="secondary" onClick={() => onCloseModal?.()}>
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
