import TaskOperations from "./TaskOperations";
import TasksContainer from "./TasksContainer";
import Menus from "../ui/Menus";
import { useTasks } from "../contexts/TasksContext";

function TaskTracker() {
  const { filteredTasks, dispatch } = useTasks();

  function handleFilter(assigneeName, date, filterBy) {
    if (!assigneeName && !date) return;

    dispatch({
      type: "tasks/filter",
      payload: { assigneeName, date, filterBy },
    });
  }

  return (
    <section
      id="task-tracker-container"
      className="flex flex-col gap-10 rounded-xl border-[3px] border-slate-100 px-2 py-4 lg:h-[40rem] lg:gap-2 xl:px-8"
    >
      <TaskOperations onFilter={handleFilter} />
      <Menus>
        <div className="flex flex-col justify-center gap-4 lg:h-5/6  lg:flex-row lg:items-center lg:gap-2 xl:gap-4">
          <TasksContainer tasks={filteredTasks} status="Pending" color="grey" />
          <TasksContainer
            tasks={filteredTasks}
            status="In Progress"
            color="yellow"
          />
          <TasksContainer
            tasks={filteredTasks}
            status="Completed"
            color="green"
          />
          <TasksContainer
            tasks={filteredTasks}
            status="Deployed"
            color="blue"
          />
          <TasksContainer
            tasks={filteredTasks}
            status="Deferred"
            color="peach"
          />
        </div>
      </Menus>
    </section>
  );
}

export default TaskTracker;
