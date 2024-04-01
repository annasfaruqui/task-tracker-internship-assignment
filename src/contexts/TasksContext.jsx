import { createContext, useContext, useReducer } from "react";
import { tasksList } from "../data/data-tasks";

const TasksContext = createContext();

const initialState = {
  tasks: tasksList,
  filteredTasks: tasksList,
};

function reducer(state, action) {
  switch (action.type) {
    case "tasks/filter":
      return {
        ...state,
        filteredTasks: state.tasks.filter(
          (task) => task.assignee.toLowerCase() === action.payload.assigneeName,
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
