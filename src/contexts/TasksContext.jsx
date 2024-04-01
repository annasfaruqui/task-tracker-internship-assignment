import { createContext, useContext, useReducer } from "react";
import { tasksList } from "../data/data-tasks";

const TasksContext = createContext();

const initialState = {
  tasks: tasksList,
  filteredTasks: tasksList,
};

function reducer(state, action) {
  switch (action.type) {
    case "tasks/createTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        filteredTasks: [...state.tasks, action.payload],
      };

    case "tasks/updateTask":
      return {
        ...state,
      };

    case "tasks/filter/assignee":
      return {
        ...state,
        filteredTasks: state.tasks.filter(
          (task) => task.assignee.toLowerCase() === action.payload,
        ),
      };

    case "tasks/filter/all":
      return {
        ...state,
        filteredTasks: state.tasks.filter(
          (task) =>
            task.assignee.toLowerCase() === action.payload.assigneeName &&
            task.priority === action.payload.priority,
        ),
      };

    case "tasks/delete":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        filteredTasks: state.filteredTasks.filter(
          (task) => task.id !== action.payload,
        ),
      };

    case "tasks/sort/priority/asc":
      return {
        ...state,
        filteredTasks: state.tasks.sort((a, b) =>
          b.title.localeCompare(a.title),
        ),
      };

    case "tasks/sort/priority/desc":
      return {
        ...state,
        filteredTasks: state.tasks.sort((a, b) =>
          a.title.localeCompare(b.title),
        ),
      };

    default:
      throw new Error("Invalid action type");
  }
}

function TasksProvider({ children }) {
  const [{ facts, filteredTasks }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <TasksContext.Provider value={{ facts, filteredTasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined)
    throw new Error(
      "TasksContext was used outside the TasksProvider component",
    );

  return context;
}

export { TasksProvider, useTasks };
