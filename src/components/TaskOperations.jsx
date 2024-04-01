import { useState } from "react";

import CreateTask from "./CreateTask";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Filter from "./Filter";
import Sort from "./Sort";

function TaskOperations({ onFilter, onSort }) {
  const [assignee, setAssignee] = useState("");
  const [date, setDate] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [sortBy, setSortBy] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onFilter(assignee, filterBy, date);
    onSort(sortBy);
  }

  return (
    <div className="flex flex-col items-start justify-between gap-6 lg:h-1/6 lg:flex-row">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-start gap-4 sm:flex-col sm:justify-between sm:gap-4"
      >
        <Filter
          assignee={assignee}
          filterBy={filterBy}
          date={date}
          setAssignee={setAssignee}
          setFilterBy={setFilterBy}
          setDate={setDate}
        />
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
        <div className="mb-10 pb-10">
          <Button type="secondary" onClick={() => handleSubmit}>
            Apply
          </Button>
        </div>
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
