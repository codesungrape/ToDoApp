import { fireEvent, render, screen } from "@testing-library/react";
import TasksContainer from "./TasksContainer";

describe("TasksContainer", () => {
  test("removes a task when delete button is clicked", () => {
    const mockSetTasks = jest.fn();
    const tasks = ["Task 1", "Task 2", "Task 3"];

    render(<TasksContainer tasks={tasks} setTasks={mockSetTasks} />);

    // Get all delete buttons
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });

    // Confirm buttons are found
    expect(deleteButtons.length).toBeGreaterThan(0);

    // Click the first delete button
    fireEvent.click(deleteButtons[0]);

    // Check that mockSetTasks was called once
    expect(mockSetTasks).toHaveBeenCalledTimes(1);

    // Extract the function passed to setTasks
    const updateFunction = mockSetTasks.mock.calls[0][0];

    // Manually invoke the function to simulate state update
    const updatedTasks = updateFunction(tasks);

    // Expect the updated task list to match the expected output
    expect(updatedTasks).toEqual(["Task 2", "Task 3"]);
  });
});
