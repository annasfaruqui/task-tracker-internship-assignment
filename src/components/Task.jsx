import { FaEdit, FaTrash } from "react-icons/fa";
import Menus from "../ui/Menus";
import { useTasks } from "../contexts/TasksContext";
import Modal from "../ui/Modal";
import EditTask from "./EditTask";

function Task({ task }) {
  const { dispatch } = useTasks();
  const { title, description, assignee, priority, status, id } = task;

  function handleDelete(id) {
    console.log("Handle Delete");
    dispatch({ type: "tasks/delete", payload: id });
  }

  return (
    <div className="flex min-w-60 flex-col gap-2 rounded-md bg-slate-200 p-2 lg:min-w-full">
      <div className="flex items-center justify-between border-b-2 border-black pb-2 pt-1">
        <p className="text-xl font-bold">{title}</p>
        <p className="flex items-center justify-center bg-blue-600 px-1 py-0.5 text-white">
          {priority}
        </p>
      </div>
      <p className="pb-3 pt-1 text-[0.95rem] leading-5">{description}</p>
      <div className="mb-1 flex items-center justify-between">
        <p>
          <strong>@{assignee}</strong>
        </p>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={id} />
            <Menus.List id={id}>
              <Modal.Open opens="edit-task">
                <Menus.Button icon={<FaEdit />}>Edit</Menus.Button>
              </Modal.Open>

              <Menus.Button onClick={() => handleDelete(id)} icon={<FaTrash />}>
                Delete
              </Menus.Button>
            </Menus.List>

            <Modal.Window name="edit-task" heading="Edit task">
              <EditTask task={task} />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
      <p className="mb-2 w-fit rounded-md bg-blue-600 px-7 py-1 text-center font-semibold text-blue-50 lg:text-sm min-[1060px]:text-base">
        {status}
      </p>
    </div>
  );
}

export default Task;
