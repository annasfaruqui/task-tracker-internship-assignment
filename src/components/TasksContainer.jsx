import Task from "./Task";

function TasksContainer({ status, tasks }) {
  let headingStyles =
    "text-white font-semibold py-2 text-center flex items-center justify-center lg:h-auto";

  if (status === "Pending") headingStyles += " bg-slate-500";
  if (status === "In Progress") headingStyles += " bg-yellow-500";
  if (status === "Completed") headingStyles += " bg-green-500";
  if (status === "Deployed") headingStyles += " bg-blue-600";
  if (status === "Deferred") headingStyles += " bg-rose-300";

  return (
    <div
      id={`${status}-tasks-container`}
      className="flex w-full flex-col overflow-hidden rounded-xl bg-green-100 lg:h-full lg:flex-grow"
    >
      <h2 className={headingStyles}>
        <span className="flex w-max items-center justify-center text-center">
          {status}
        </span>
      </h2>
      <div className="flex h-[95%] w-full gap-4 overflow-scroll bg-white px-2 py-3 lg:flex-col">
        {tasks
          .filter((task) => status === task.status)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
}

export default TasksContainer;
