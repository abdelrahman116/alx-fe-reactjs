import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList and initial tasks", () => {
    render(<TodoList />);

    // Check header
    expect(screen.getByText(/To-Do List/i)).toBeInTheDocument();

    // Check a few demo tasks exist
    expect(screen.getByText(/Write test/i)).toBeInTheDocument();
    expect(screen.getByText(/Review React /i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    // Get input fields
    const nameInput = screen.getByPlaceholderText(/Enter task name/i);
    const descInput = screen.getByPlaceholderText(/Enter description/i);
    const addButton = screen.getByText(/➕ Add Task/i);

    // Simulate typing and adding
    fireEvent.change(nameInput, { target: { value: "New Test Task" } });
    fireEvent.change(descInput, { target: { value: "Test Description" } });
    fireEvent.click(addButton);

    // Verify it's rendered
    expect(screen.getByText(/New Test Task/i)).toBeInTheDocument();
  });

  test("toggles a todo's completion state", () => {
    render(<TodoList />);

    // Find a toggle button (Done)
    const toggleButton = screen.getAllByText(/Done/i)[0];

    // Click to mark done
    fireEvent.click(toggleButton);

    // Button should now say Undo (state toggled)
    expect(screen.getAllByText(/Undo/i)[0]).toBeInTheDocument();
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    // Get all delete buttons before delete
    const deleteButtons = screen.getAllByText(/Delete/i);
    const firstTask = screen.getByText(/Task 1/i);

    // Delete first task
    fireEvent.click(deleteButtons[0]);

    // It should be removed
    expect(firstTask).not.toBeInTheDocument();
  });
});
