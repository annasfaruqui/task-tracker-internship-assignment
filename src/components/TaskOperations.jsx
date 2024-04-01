import { useState } from "react";

import CreateTask from "./CreateTask";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Select from "../ui/Select";

function TaskOperations({
  filterBy,
  setFilterBy,
  sortBy,
  setSortBy,
  onFilter,
}) {
  const [assignee, setAssignee] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onFilter(assignee, date, filterBy);
  }

  return (
    <div className="flex flex-col items-start justify-between gap-6 lg:h-1/6 lg:flex-row">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-start gap-4 sm:flex-col sm:justify-between sm:gap-4"
      >
        <div className="flex w-36 flex-col gap-2 min-[350px]:w-auto sm:w-auto md:flex-row lg:items-center lg:gap-8">
          <p className="mr-6 font-semibold md:mr-0">Filter By:</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:gap-8">
            <Input
              type="text"
              placeholder="Assignee Name"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
            <Select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <option>Priority</option>
              <option>P0</option>
              <option>P1</option>
              <option>P2</option>
            </Select>
            <Input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="DD/MM/YY - DD/MM/YY"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[450px]:flex-row sm:items-center lg:gap-8">
          <p className="mr-2 font-semibold">Sort By:</p>
          {/* <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Priority</option>
            <option>P0</option>
            <option>P1</option>
            <option>P2</option>
          </Select> */}
        </div>
        {/* ///////////////////////////////// */}
        <div className="mb-10 pb-10">
          <Button type="secondary" onClick={() => handleSubmit}>
            Apply
          </Button>
        </div>
        {/* ////////////////////////////////// */}
      </form>

      <div className="basis-1/5 bg-red-200">
        <Modal>
          <Modal.Open opens="create-task">
            <Button type="primary">Add New Task</Button>
          </Modal.Open>

          <Modal.Window name="create-task" heading="Create a task">
            <CreateTask />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default TaskOperations;