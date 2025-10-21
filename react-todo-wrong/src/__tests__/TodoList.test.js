// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import TodoList from "../components/TodoList";
// import "@testing-library/jest-dom";

// describe("TodoList Component", () => {
//   test("renders initial todos", () => {
//     render(<TodoList />);
//     expect(screen.getByText(/Fix the sensor wiring/i)).toBeInTheDocument();
//     expect(screen.getByText(/Build login page UI/i)).toBeInTheDocument();
//   });

//   test("adds a new todo", () => {
//     render(<TodoList />);
//     const nameInput = screen.getByPlaceholderText(/Enter task name/i);
//     const descInput = screen.getByPlaceholderText(/Enter description/i);
//     const addButton = screen.getByRole("button", { name: /Add Task/i });

//     fireEvent.change(nameInput, { target: { value: "New Todo" } });
//     fireEvent.change(descInput, { target: { value: "Testing addition" } });
//     fireEvent.click(addButton);

//     expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
//   });

//   test("toggles todo status", () => {
//     render(<TodoList />);
//     const toggleBtn = screen.getAllByText(/Done/i)[0];
//     fireEvent.click(toggleBtn);
//     expect(toggleBtn.textContent).toBe("Undo");
//   });

//   test("deletes a todo", () => {
//     render(<TodoList />);
//     const firstDelete = screen.getAllByText(/Delete/i)[0];
//     fireEvent.click(firstDelete);
//     expect(
//       screen.queryByText(/Fix the sensor wiring/i)
//     ).not.toBeInTheDocument();
//   });
// });
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Fix the sensor wiring/i)).toBeInTheDocument();
    expect(screen.getByText(/Build login page UI/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const nameInput = screen.getByPlaceholderText(/Enter task name/i);
    const descInput = screen.getByPlaceholderText(/Enter description/i);
    const addButton = screen.getByRole("button", { name: /Add Task/i });

    fireEvent.change(nameInput, { target: { value: "New Todo" } });
    fireEvent.change(descInput, { target: { value: "Testing addition" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test("toggles todo status", () => {
    render(<TodoList />);
    const toggleBtn = screen.getAllByText(/Done/i)[0];
    fireEvent.click(toggleBtn);
    expect(toggleBtn.textContent).toBe("Undo");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const firstDelete = screen.getAllByText(/Delete/i)[0];
    fireEvent.click(firstDelete);
    expect(
      screen.queryByText(/Fix the sensor wiring/i)
    ).not.toBeInTheDocument();
  });
});
