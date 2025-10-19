import { useState } from "react";
import Task from "./Task";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Write test cases for TodoList",
      description: "Ensure all core features are tested",
      state: false, // false = not done
    },
    {
      id: 2,
      name: "Review React Hooks notes",
      description: "Revise useEffect and useReducer concepts",
      state: true, // true = done
    },
  ]);

  // ✅ Add task
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, state: false }]);
  };

  // ✅ Toggle task state (done <-> not done)
  const toggleTaskState = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: !task.state } : task
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

      {/* ✅ Form for adding tasks */}
      <AddTodoForm onAdd={addTask} />

      <div className="space-y-2 mt-4">
        {tasks.map((task) => (
          <Task
            key={task.id}
            name={task.name}
            description={task.description}
            state={task.state}
            onToggle={() => toggleTaskState(task.id)} // pass toggle handler
          />
        ))}
      </div>
    </div>
  );
}
