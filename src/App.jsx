import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskTracker from "./components/TaskTracker";
import { TasksProvider } from "./contexts/TasksContext";

function App() {
  return (
    <div id="container">
      <main id="main" className="mx-auto mb-4 max-w-screen-2xl px-4 md:px-16">
        <Header />
        <TasksProvider>
          <TaskTracker />
        </TasksProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
