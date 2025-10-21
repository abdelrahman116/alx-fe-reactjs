import React from "react";

import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Fix the sensor wiring",
      description: "Reconnect loose wires.",
      status: "pending",
    },
    {
      id: 2,
      name: "Build login page UI",
      description: "Use Tailwind components.",
      status: "in progress",
    },
    {
      id: 3,
      name: "Write test cases for TodoList",
      description: "Add unit tests using Jest.",
      status: "pending",
    },
  ]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      { ...newTask, id: tasks.length + 1, status: "pending" },
    ]);
  };

  // Toggle status
  const toggleStatus = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "done" ? "pending" : "done" }
          : t
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <AddTodoForm onAdd={addTask} />
      <ul className="space-y-3 mt-4">
        {tasks.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-3 border rounded-lg ${
              todo.status === "done" ? "bg-green-100" : "bg-white"
            }`}
          >
            <div>
              <h3 className="font-semibold">{todo.name}</h3>
              <p className="text-gray-600 text-sm">{todo.description}</p>
            </div>
            <div>
              <button
                onClick={() => toggleStatus(todo.id)}
                className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
              >
                {todo.status === "done" ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteTask(todo.id)}
                className="px-2 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
